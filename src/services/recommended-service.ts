import prisma from "@/lib/prismadb";

export const getRecommended = async () => {
	await new  Promise((resolve) => setTimeout(resolve,5000))
	const recommended = await prisma.user.findMany({
		orderBy: {
			createdAt: "desc"
		}
	});
	if(!recommended){
		return null ;
	}
	return recommended
}


