import { getSelf } from "./auth-service";
import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";


export const getRecommended = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000))
export const getRecommendedService = async () => {
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


		userId = null;
	}
	let users = [];


	if (userId) {
		users = await prisma.user.findMany({
			where: {
				NOT: {
					id: userId
				}
			}, orderBy: {
				createdAt: "desc"
			}
		})
	} else {
		users = await prisma.user.findMany({
			orderBy: {
				createdAt: "desc"
			}
		})
	}
	return users
}