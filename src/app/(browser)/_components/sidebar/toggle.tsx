"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import Hint from "./tooltip";
import { Button } from "@/components/ui/button";

const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSidebar();
	const label = collapsed ? "Expand" : "collapsed"
	return (
		<div className={cn("flex flex-col items-center p-4 mb-2")}>
			{!collapsed && (
				<div className="flex items-center ml-5 justify-between w-full">
					<p className="font-semibold  text-[#757575]">For You</p>
					<Hint label={label} asChild>
						<Button onClick={onCollapse} className="hover:text-white cursor-pointer">
							<ArrowLeftFromLine className="size-5  cursor-pointer text-[#757575] h-auto ml-auto" />
						</Button>
					</Hint>
				</div>
			)}
			{collapsed && (
				<div  className="hidden  md:flex items-center justify-center">
					<Hint asChild label={label} >
						<Button  onClick={onExpand} className="cursor-pointer hover:text-white">
							<ArrowRightFromLine className="size-5 block  text-[#757575]" />
						</Button>
					</Hint>
				</div>
			)}
		</div>
	)
}

export default Toggle ;
