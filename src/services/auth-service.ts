import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prismadb";

export const getSelf = async () => {
	try {
		const self = await currentUser();
		if (!self || !self.username || !self.id) {
			throw new Error("Unauthorized")
		}
		const user = await prisma.user.findUnique({
			where: { externalUserId: self.id }
		})
		if (!user) {
			throw new Error("user not found or")
		}
		return user;
	} catch (error) {
		console.log("Error in getSelf", error)
		return null;
	}

}
export const getSelfByUsername = async (username: string) => {
	try {
		const self = await currentUser();
		if (!self || !self.username) {
			throw new Error("Unauthorized")
		}
		console.log("Self", self.id)
		console.log("username", username)

		const user = await prisma.user.findUnique({
			where: { username }
		})
		if (!user) {
			throw new Error("User not found")
		}

		if (user.externalUserId !== self.id) {
			throw new Error("Unauthorized")
		}
		return user;
	} catch (error) {
		console.log("Error in getSelf", error)
	return null ;
	}
}