"use server";

import { followUser, unFollowUser } from "@/services/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
	try {
		const user = await followUser(id);
		revalidatePath("/")
		revalidatePath(`/${user.following.username}`)
		return user;
	} catch (error) {
		console.log("Error in onFollow", error)
		throw new Error("Internal Sever Error")
	}
}
export const onUnFollow = async (id: string) => {
	try {
		const user = await unFollowUser(id);
		revalidatePath("/")
		revalidatePath(`/${user.follower.username}`)
		return user;
	} catch (error) {
		console.log("Error in onFollow", error)
		throw new Error("Internal Sever Error")
	}
}