import { WebhookReceiver } from "livekit-server-sdk";
import { headers } from "next/headers";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

const receiver = new WebhookReceiver(process.env.LIVEKIT_API_KEY!, process.env.LIVEKIT_API_SECRET!);


export async function POST(req: Request) {
	const body = await req.text();
	const headersPayload = await headers();
	const authorization = headersPayload.get("Authorization")

	if (!authorization) {
		return new Response("No authorization header", { status: 400 })
	}
	const event = await receiver.receive(body, authorization)

	if (event.event === "ingress_ended") {
		await prisma.stream.update({
			where: {
				ingressId: event.ingressInfo?.ingressId
			}, data: {
				isLive: false
			}
		})
	}

		if (event.event === "ingress_started") {
		await prisma.stream.update({
			where: {
				ingressId: event.ingressInfo?.ingressId
			}, data: {
				isLive: true
			}
		})
	}

	return  new NextResponse("Ok",{status : 200})
}