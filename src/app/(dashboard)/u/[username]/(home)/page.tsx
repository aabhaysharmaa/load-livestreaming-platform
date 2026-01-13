

import StreamPlayer from "@/components/stream-player";
import { getUserByUsername } from "@/services/user";
import { currentUser } from "@clerk/nextjs/server";

interface DashboardBoardProps {
	params: {
		username: string
	}
}

const Dashboard = async ({ params }: DashboardBoardProps) => {
	const { username } =  await params
	const externalUser = await currentUser();
	const user = await  getUserByUsername(username)
	if(!user || externalUser?.id !== user.externalUserId || !user.stream){
		throw new Error("Unauthorized")
	}
	return (
		<div className="h-full">
			<StreamPlayer
			 user={user}
			 stream={user.stream}
			 isFollowing
			/>
		</div>
	)
}

export default Dashboard
