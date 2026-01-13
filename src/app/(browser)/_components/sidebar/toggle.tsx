"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "./tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";


const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
	const [mounted, setMounted] = useState(false);
	const label = collapsed ? "Expand" : "collapsed"
	  // eslint-disable-next-line react-hooks/set-state-in-effect
	  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

	return (
		<div className={cn("flex flex-col items-center p-4 mb-2")}>
			{!collapsed && (
				<div className="flex items-center ml-5 justify-between w-full">
					<p className="font-semibold  text-[#757575]">For You</p>
					<Hint label={label} asChild>
						<Button variant={"ghost"} onClick={onCollapse} className="hover:text-white cursor-pointer">
							<ArrowLeftFromLine className="size-5  cursor-pointer text-[#757575] h-auto ml-auto" />
						</Button>
					</Hint>
				</div>
			)}
			{collapsed && (
				<div className="hidden  md:flex items-center justify-center">
					<Hint asChild label={label} >
						<Button asChild variant={"ghost"} onClick={onExpand} className="cursor-pointer hover:text-white">
							<ArrowRightFromLine className="size-5 block  text-[#757575]" />
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
		<div className="p-3 pl-6  hidden mt-8  lg:flex items-center justify-between w-full">
			<Skeleton className="h-8 w-25 bg-[#272727]" />
			<Skeleton className="size-8 bg-[#272727]" />
		</div>
	)
}