"use client";

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import UserAvatar from '@/components/user-avatar';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/useSidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LiveBadge from '../live-badge';

interface UserItemProps {
	username: string;
	imageUrl: string;
	isLive: boolean
}

const UserItem = ({ username, isLive, imageUrl }: UserItemProps) => {
	const pathname = usePathname();
	const { collapsed } = useSidebar((state) => state);

	const href = `/${username}`;
	const isActive = pathname === href;
	return (
		<Button
			asChild
			variant="ghost"
			className={cn("w-full h-12  hover:bg-[#252525] ", !collapsed && "justify-center", isActive && "bg-[#272727]")}
		>
			<Link href={href}>
				<div className={cn("flex items-center justify-start w-full gap-x-4", collapsed && "justify-center")}>
					<UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
					{!collapsed && (
						<p className='truncate'>{username}</p>
					)}
					{!collapsed && isLive && (
						<LiveBadge className='ml-auto p-1.5' />
					)}
				</div>
			</Link>
		</Button>
	)
}

export default UserItem;

export const UserItemSkeleton = () => {
	return (
		<li className='flex items-center   gap-x-6 px-3 py-2'>
			<Skeleton className='min-h-10 bg-[#272727] min-w-10 rounded-full' />
			<div className="flex-1">
				<Skeleton className='h-7 bg-[#272727]' />
			</div>
		</li>
	)
}