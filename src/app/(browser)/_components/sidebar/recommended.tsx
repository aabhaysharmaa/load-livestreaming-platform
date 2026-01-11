"use client";

import { User } from "@/generated/prisma/client";
import { useSidebar } from "@/store/useSidebar";
import UserItem, { UserItemSkeleton } from "./user-item";

interface RecommendedProps {
	data: User[] | [];
}

const Recommended = ({ data }: RecommendedProps) => {

	const { collapsed } = useSidebar((state) => state);

	const showLabel = !collapsed && data.length > 0;
	return (
		<div>
			{showLabel && (
				<div className="pl-6 mb-4">
					<p className="text-sm text-[#757575]">Recommended</p>
				</div>
			)}
			<ul className="space-y-2">
				{data.map((user) => (
					<UserItem key={user.id} username={user.username} imageUrl={user.imageUrl} isLive={true} />
				))}
			</ul>
		</div>
	)
}

export default Recommended


export const RecommendedSkeleton = () => {
	return (
		<ul className="mt-2">
			{[...Array(4)].map((_, idx) => (
				<UserItemSkeleton key={idx} />
			))}
		</ul>
	)
}