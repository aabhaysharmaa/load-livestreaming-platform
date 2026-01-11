import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";
import { getUserById } from "./user";


export const isUserBlocked = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await getUserById(id);
		if (!otherUser) {
			return false
		}
		if (self.id === otherUser?.id) {
			return false
		}
		const existingBlockedUser = await prisma.block.findFirst({
			where: {
				blockerId: self.id,
				blockedId: otherUser.id
			}
		})

		return !!existingBlockedUser
	} catch (error) {
		console.log("isUserBlocked : ", error)
		return false
	}
}

export const blockUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await getUserById(id);
		if (!otherUser) {
			throw new Error("Not Found")
		}

		if (self.id === otherUser.id) {
			throw new Error("cannot blocked yourself")
		}

		const existingBlockedUser = await prisma.block.findFirst({
			where: {
				blockerId: self.id,
				blockedId: otherUser.id
			}
		})
		if (existingBlockedUser) {
			throw new Error("Already blocked User")
		}
		const block = await prisma.block.create({
			data: {
				blockerId: self.id,
				blockedId: otherUser.id
			}, include: {
				blocked: true,
				blocker: true
			}
		})

		return block
	} catch (error) {
		console.log("Error in BlockUser : ", error)
		throw new Error("Internal Server Error")
	}
}

export const unBlockUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await getUserById(id);
		if (!otherUser) {
			throw new Error("Not Found")
		}

		console.log("otherUser :", otherUser)
		if (self.id === otherUser.id) {
			throw new Error("cannot blocked yourself")
		}

		const existingBlockedUser = await prisma.block.findFirst({
			where: {
				blockerId: self.id,
				blockedId: otherUser.id
			}
		})
		console.log("existingBlockedUser", existingBlockedUser)
		if (!existingBlockedUser) {
			throw new Error("user is not blocked")
		}
		const block = await prisma.block.delete({
			where: {
				id: existingBlockedUser.id
			}, include: {
				blocked: true,
				blocker: true
			}
		})
		return block
	} catch (error) {
		console.log("Error in BlockUser : ", error)
		throw new Error("Internal Server Error")
	}
}