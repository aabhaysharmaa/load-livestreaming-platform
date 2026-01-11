"use client";

import { Follow, User } from '@/generated/prisma/client'
import { useSidebar } from '@/store/useSidebar';
import UserItem from './user-item';

interface FollowingProps {
	data: (Follow & { following: User })[];
}

const Following = ({ data }: FollowingProps) => {
	const { collapsed } = useSidebar((state) => state);
	const label = data.length > 0;

	if (!label) {
		return null;
	}

	return (
		<div>
			{label && !collapsed && (
				<div className="px-2 mb-4 ml-4 mt-4 space-y-4">
					<p className='text-[#757575] text-sm'>Following</p>
				</div>
			)}
			{data.map((user) => (
				<UserItem
					key={user.following.id}
					username={user.following.username}
					imageUrl={user.following.imageUrl}
					isLive
				/>
			))}
		</div>
	)
}
export default Following
