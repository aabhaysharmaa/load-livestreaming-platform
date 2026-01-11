import { isFollowingUser } from "@/services/follow-service";
import { getUserByUsername } from "@/services/user";
import { notFound } from "next/navigation";
import Action from "../_components/sidebar/action";
import { isUserBlocked } from "@/services/block-service";

interface UserPageProps {
	params: { username: string }
}

const UserPage = async ({ params }: UserPageProps) => {
	const { username } = await params
	const user = await getUserByUsername(username);
	if (!user) {
		return notFound();
	}
	const isFollowing = await isFollowingUser(user.id);
	const isBlocked = await isUserBlocked(user.id);
	return (
		<div className="flex p-4 flex-col space-y-3">
			<p>Username : {user.username}</p>
			<p>user Id : {user.id}</p>
			<p>is Following : {`${isFollowing}`}</p>
			<p>is blocked : {`${isBlocked}`}</p>
			<div className="">
				<Action userId={user.id} isFollowing={isFollowing} isBlocked={isBlocked} />
			</div>
		</div>
	)
}

export default UserPage
