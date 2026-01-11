"use client";

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/useSidebar';
import React, { ReactNode, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts';

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	const { collapsed, onCollapse, onExpand } = useSidebar();
	const matches = useMediaQuery("(max-width : 1024px)");

	useEffect(() => {
		if (matches) {
			onCollapse();
		} else {
			onExpand();
		}
	}, [onCollapse, onExpand, matches])
	return (
		<div className={cn("flex-1 ml-17.5 lg:w-60", collapsed ? "ml-17.5" :"ml-17.5 lg:ml-60")}>
			{children}
		</div>
	)
}

export default Container
