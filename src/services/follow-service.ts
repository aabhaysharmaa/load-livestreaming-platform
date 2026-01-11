import prisma from "@/lib/prismadb";
import { getSelf } from "./auth-service";

export const isFollowingUser = async (id: string) => {
	try {
		const self = await getSelf();
		const otherUser = await prisma.user.findUnique({
			where: { id }
		})
		if (!otherUser) {
			throw new Error("Not Found")
		}
		if (self.id === otherUser.id) {
			return true;
		}
		const following = await prisma.follow.findFirst({
			where: {
				followingId: otherUser.id,
				followerId: self.id
			}
		})
		return !!following
	} catch (error) {
		console.log("Error in isFollowing", error)
		return false
	}
}

export const getFollowUsers = async () => {
	try {
		const user = await prisma.follow.findMany({
			orderBy: {
				createdAt: "desc"
			}, include: {
				following: true,
			}
		});
		return user;
	} catch (error) {
		console.log("getFollowUser : ", error)
		return [];
	}
}

export const followUser = async (id: string) => {
	const self = await getSelf();
	const otherUser = await prisma.user.findUnique({ where: { id } })
	if (!otherUser) {
		throw new Error("Not Found")
	}
	if (self.id === otherUser.id) {
		throw new Error("cannot follow yourself")
	}

	const existingFollow = await prisma.follow.findFirst({
		where: {
			followerId: self.id,
			followingId: otherUser.id
		}
	})
	if (existingFollow) {
		throw new Error("Already Following User")
	}

	const follow = await prisma.follow.create({
		data: {
			followerId: self.id,
			followingId: otherUser.id
		}, include: {
			follower: true,
			following: true
		}
	})
	return follow
}

export const unFollowUser = async (id: string) => {
	const self = await getSelf();
	const otherUser = await prisma.user.findUnique({ where: { id } })
	if (!otherUser) {
		throw new Error("Not Found")
	}
	if (self.id === otherUser.id) {
		throw new Error("cannot follow yourself")
	}

	const existingFollow = await prisma.follow.findFirst({
		where: {
			followerId: self.id,
			followingId: otherUser.id
		}
	})
	if (!existingFollow) {
		throw new Error("now following")
	}

	const follow = await prisma.follow.delete({
		where: {
			id: existingFollow.id
		}, include: {
			follower: true
		}
	})
	return follow
}