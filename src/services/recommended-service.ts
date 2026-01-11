import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000))
	let userId;
	try {
		const self = await getSelf();
		userId = self.id
	} catch {
		userId = null
	}
	let users = [];
	if (userId) {
		users = await prisma.user.findMany({
			where: {
				AND: [
					{
						NOT: {
							id: userId
						}
					}, {
						NOT: {
							following: {
								some: {
									followerId: userId
								}
							}
						}
					}
				]
			}
		})
	} else {
		users = await prisma.user.findMany({
			orderBy: {
				createdAt: "desc"
			}
		})
	}
	return users;
}


