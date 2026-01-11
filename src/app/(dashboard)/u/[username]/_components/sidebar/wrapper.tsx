"use client";

import { cn } from "@/lib/utils";
import { useSidebarDashboard } from "@/store/useSidebarDashboard";
import { ReactNode, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
interface WrapperProps {
	children: ReactNode
}
const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed, onCollapse, onExpand } = useSidebarDashboard((state) => state)
	const query = useMediaQuery("(max-width : 1024px)");
	useEffect(() => {
		if (query) {
			onCollapse()
		} else {
			onExpand()
		}
	}, [query, onCollapse, onExpand])

	return (
		<aside className={cn(
			"flex flex-col left-0 border-r  w-17.5 lg:w-60 min-h-screen z-50 border-[#2D2E35] bg-[#1E1E1E] h-full", collapsed && "lg:w-17.5" ,
		)}
		>
			{children}
		</aside>
	)
}

export default Wrapper
