"use client";

import { useUser } from "@clerk/nextjs";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem, { NavItemSkeleton } from "./nav-item";

const Navigation = () => {
	const { user } = useUser();
	const pathname = usePathname();

	if(!user?.username) {
		return (
			<ul className="space-y-2">

				{[...Array(4)].map((_,idx) =>(
					<NavItemSkeleton key={idx}/>
				))}
			</ul>
		)
	}
	const routes = [
		{
			label: "Stream",
			href: `/u/${user?.username}`,
			icon: Fullscreen
		},
		{
			label: "key",
			href: `/u/${user?.username}/keys`,
			icon: KeyRound
		},
		{
			label: "Chat",
			href: `/u/${user?.username}/chat`,
			icon: MessageSquare
		},
		{
			label: "Community",
			href: `/u/${user?.username}/community`,
			icon: Users
		},
	]
	return (
		<ul className="px-2 space-y-4 lg:pt-0">
			{routes.map((route) => (
				<NavItem
					key={route.href}
					isActive={pathname === route.href}
					label={route.label}
					icon={route.icon}
					href={route.href}
				/>
			))}
		</ul>


	)
}

export default Navigation
