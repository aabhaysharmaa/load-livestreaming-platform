import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prismadb";

export const getSelf = async () => {
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
}