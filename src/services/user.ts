import prisma from "@/lib/prismadb";

export const getUserByUsername = async (username: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { username },
			include: {
				stream: true
			}
		})
		return user;
	} catch (error) {
		console.log("Error in getUserByUsername", error)
		throw new Error("Internal Server Error")
	}
}
export const getUserById = async (id: string) => {
	try {
		const user = await prisma.user.findUnique({ where: { id } })
		return user;
	} catch (error) {
		console.log("Error in getUserByUsername", error)
		throw new Error("Internal Server Error")
	}
}