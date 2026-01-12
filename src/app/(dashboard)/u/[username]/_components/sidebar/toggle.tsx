"use client" ;

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import Hint from "@/app/(browser)/_components/sidebar/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebarDashboard } from "@/store/useSidebarDashboard";


const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSidebarDashboard((state) => state);
	const label = collapsed ? "Expand" : "collapsed"
	return (
		<div className={cn("flex flex-col items-center p-4 mb-2")}>
			{!collapsed && (
				<div className="flex items-center  ml-5 justify-between w-full">
					<p className="font-semibold  text-[#E0E0E0]">Dashboard</p>
					<Hint label={label} asChild>
						<Button onClick={onCollapse} variant={"ghost"} className="hover:text-white cursor-pointer">
							<ArrowLeftFromLine className="size-5  cursor-pointer text-[#E0E0E0] h-auto ml-auto" />
						</Button>
					</Hint>
				</div>
			)}
			{collapsed && (
				<div className="hidden  md:flex  items-center justify-center">
					<Hint asChild label={label} >
						<Button onClick={onExpand} variant={"ghost"} className="cursor-pointer hover:text-white">
							<ArrowRightFromLine className="size-5 block  text-[#E0E0E0]" />
						</Button>
					</Hint>
				</div>
			)}
		</div>
	)
}

export default Toggle;
export const ToggleSkeleton = () => {
	return (
		<div className="p-3 pl-6  hidden   lg:flex items-center justify-between w-full">
			<Skeleton className="h-8 w-25 bg-[#272727]" />
			<Skeleton className="size-8 bg-[#272727]" />
		</div>
	)
}