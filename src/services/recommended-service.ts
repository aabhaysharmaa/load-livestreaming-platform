
import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";


export const getRecommendedService = async () => {
	// await new Promise((r) => setTimeout(() => r , 5000))

	let userId;
	try {
		const self = await getSelf();
		if (!self) {
			userId = null
		}
		userId = self?.id
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
					}, {
						NOT: {
							blocked: {
								some: {
									blockerId: userId
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
