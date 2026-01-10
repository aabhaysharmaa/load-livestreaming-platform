"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { ReactNode, useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsClient(true)
	}, [])

	const { collapsed } = useSidebar((state) => state);
	if (!isClient) {
		return (
			<aside className={cn("fixed left-0 h-full w-17.5 lg:w-60  flex flex-col  bg-[#1E1E1E] border-r border-[#2d2e35]", collapsed ? "w-17.5" : "w-60")}>
				<ToggleSkeleton />
				<RecommendedSkeleton />
			</aside>
		)
	}
	return (
		<aside className={cn("fixed left-0 h-full w-17.5 lg:w-60  flex flex-col  bg-[#1E1E1E] border-r border-[#2d2e35]", collapsed ? "w-17.5" : "w-60")}>
			{children}
		</aside>
	)
}

export default Wrapper
