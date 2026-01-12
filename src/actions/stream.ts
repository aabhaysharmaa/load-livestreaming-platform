"use server"

import { Stream } from "@/generated/prisma/client";
import { getSelf } from "@/services/auth-service";
import { revalidatePath } from "next/cache";

export const upStream = async (values: Partial<Stream>) => {
	try {
		const self = await getSelf();
		if (!self) {
			return null;
		}
		const selfStream = await prisma?.stream.findUnique({
			where: {
				userId: self.id
			}
		})
		if (!selfStream) {
			throw new Error("Stream not found");
		}
		const validDate = {
			name: values.name,
			isChatEnabled: values.isChatEnabled,
			isChatDelayed: values.isChatDelayed,
			isChatFollowerOnly: values.isChatFollowerOnly
		}

		const stream = await prisma?.stream.update({
			where: {
				id: selfStream.id
			}, data: {
				...validDate
			}
		})
		revalidatePath(`/u/${self?.username}/chat`)
		revalidatePath(`/u/${self?.username}`)
		revalidatePath(`/${self?.username}`)
		return stream
	} catch (error) {
		console.log("UpStream Error :", error);
	}
}