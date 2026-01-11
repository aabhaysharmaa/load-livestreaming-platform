import prisma from "@/lib/prismadb";

export const getUserByUsername = async (username: string) => {
	try {
		const user = await prisma.user.findUnique({ where: { username } })
		return user ;
	} catch (error) {
		console.log("Error in getUserByUsername", error)
		throw new Error("Internal Server Error")
	}
}