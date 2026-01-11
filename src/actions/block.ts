"use server"

import { blockUser, unBlockUser } from "@/services/block-service"
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
	try {
		const user = await blockUser(id);
		revalidatePath("/")
		revalidatePath(`/${user.blocked.username}`)
		return user;
	} catch (error) {
		console.log("Error in onBlock :", error)
		throw new Error("Internal Server Error")
	}
}

export const onUnBlock = async (id : string) => {
try {
		const user = await unBlockUser(id);
		revalidatePath("/")
		revalidatePath(`/${user.blocked.username}`)
		return user;
	} catch (error) {
		console.log("Error in onBlock :", error)
		throw new Error("Internal Server Error")
	}
}