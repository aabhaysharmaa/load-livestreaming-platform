import { getSelf } from "./auth-service";
import prisma from "@/lib/prismadb";

export const getRecommendedService = async () => {
	let userId;
	try {
		const self = await getSelf();
		userId = self.id
	} catch {
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