"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useSidebarDashboard } from "@/store/useSidebarDashboard";
import { LucideIcon } from "lucide-react"
import Link from "next/link";

interface NavItemProps {
	icon: LucideIcon;
	isActive: boolean;
	href: string;
	label: string
}

const NavItem = ({ icon: Icon, isActive, href, label }: NavItemProps) => {
	const { collapsed } = useSidebarDashboard((state) => state)
	return (
		<Button
			asChild
			variant="ghost"
			className={cn("w-full h-12 ", collapsed ? "mr-0" : "mr-2", isActive && "bg-[#252525]", collapsed ? "justify-center" : "justify-start")}
		>
			<Link href={href}>
				<div className="flex items-center gap-x-4 w-full">
					<Icon className={cn("size-4 flex")} />
					{!collapsed && (
						<span>
							{label}
						</span>
					)}
				</div>
			</Link>
		</Button>
	)
}

export default NavItem


export const NavItemSkeleton = () => {
	return (
		<li className="flex items-center gap-x-4 px-3 py-2">
			<Skeleton  className="min-h-12 min-w-12 bg-[#272727] rounded-md"/>
			<div className="flex-1 hidden lg:block">
				<Skeleton className="w-full bg-[#272727] min-h-12"/>
			</div>
		</li>
	)
}