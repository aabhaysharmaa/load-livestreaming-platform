import { verifyWebhook } from "@clerk/backend/webhooks";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
	try {
		const evt = await verifyWebhook(request);

		//  creating the user
		if (evt.type === "user.created") {
			await prisma.user.create({
				data: {
					username: evt.data.username!,
					externalUserId: evt.data.id,
					imageUrl: evt.data.image_url,
					stream: {
						create: {
							name: `${evt.data.username!}'s stream`
						}
					}
				}
			})
		}

		// updating the user
		if (evt.type === "user.updated") {
			await prisma.user.update({
				where: {
					externalUserId: evt.data.id
				}, data: {
					username: evt.data.username!,
					imageUrl: evt.data.image_url
				}
			})
		}

		//  Deleting the user
		if (evt.type === "user.deleted") {
			await prisma.user.delete({
				where: {
					externalUserId: evt.data.id
				}
			})
		}
		return new Response("Success", { status: 200 });
	} catch (err) {
		console.error("Webhook verification failed:", err);
		return new Response("Webhook verification failed", { status: 400 });
	}
}