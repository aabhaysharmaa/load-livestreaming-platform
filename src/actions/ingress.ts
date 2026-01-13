"use server";

import {
	IngressClient,
	IngressInput,
	IngressAudioOptions,
	IngressVideoOptions,
	IngressVideoEncodingPreset,
	IngressAudioEncodingPreset,
	TrackSource,
	type CreateIngressOptions,
} from "livekit-server-sdk";

import prisma from "@/lib/prismadb";
import { getSelf } from "@/services/auth-service";
import { revalidatePath } from "next/cache";

/**
 * Use IngressClient for creating ingresses
 */
const ingressClient = new IngressClient(
	process.env.LIVEKIT_URL!,
	process.env.LIVEKIT_API_KEY!,
	process.env.LIVEKIT_API_SECRET!,
);

export const createIngress = async (ingressType: IngressInput) => {
	const self = await getSelf();
	if (!self) {
		throw new Error("Unauthorized");
	}

	// Delete old ingresses for this user/room
	const existingList = await ingressClient.listIngress({
		roomName: self.id,
	});
	for (const old of existingList) {
		if (old.ingressId) {
			await ingressClient.deleteIngress(old.ingressId);
		}
	}

	// Create options
	const options: CreateIngressOptions = {
		name: self.username,
		roomName: self.id,
		participantIdentity: self.id,
		participantName: self.username,

	};

	// Set video encoding with preset
	options.video = new IngressVideoOptions({
		source: TrackSource.CAMERA,
		encodingOptions: {
			case: "preset",
			value: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
		},
	});

	// Set audio encoding with preset
	options.audio = new IngressAudioOptions({
		source: TrackSource.MICROPHONE,
		encodingOptions: {
			case: "preset",
			value: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
		},
	});

	// Create ingress
	const ingress = await ingressClient.createIngress(ingressType, options);
	console.log("Ingress URL:", ingress.url);
	console.log("Ingress server info:", ingress);

	if (!ingress.ingressId || !ingress.streamKey || !ingress.url) {
		throw new Error("Failed to create ingress");
	}

	// Persist into DB
	await prisma.stream.update({
		where: { userId: self.id },
		data: {
			ingressId: ingress.ingressId,
			serverUrl: ingress.url,
			streamKey: ingress.streamKey,
		},
	});

	revalidatePath(`/u/${self?.username}/keys`)
	return {
		success: true,
		message: "Ingress created",
	};

};
