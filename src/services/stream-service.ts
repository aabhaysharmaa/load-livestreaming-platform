import prisma from "@/lib/prismadb";

export const getStreamByUserId = async (userId: string) => {
	const stream = await prisma.stream.findUnique({
		where: { userId }
	})
	return stream;
}
