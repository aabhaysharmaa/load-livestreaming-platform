"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { ReactNode } from "react";

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed } = useSidebar((state) => state);

	return (
		<aside className={cn("fixed left-0 h-full  flex flex-col  bg-[#1E1E1E] border-r border-[#2d2e35]", collapsed ? "w-17.5" : "w-60")}>
			{children}
		</aside>
	)
}

export default Wrapper
