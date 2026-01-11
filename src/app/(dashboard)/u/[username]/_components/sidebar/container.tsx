"use client";

import { cn } from '@/lib/utils';
import { useSidebarDashboard } from '@/store/useSidebarDashboard';
import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
	const { collapsed } = useSidebarDashboard();
	return (
		<div className={cn("flex-1 ml-17.5 lg:ml-60", collapsed ? "ml-17.5" :"ml-17.5 lg:ml-60")}>
			{children}
		</div>
	)
}

export default Container
