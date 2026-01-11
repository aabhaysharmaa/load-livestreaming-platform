import { create } from "zustand";

interface sidebarDashboardProps {
	collapsed: boolean;
	onExpand: () => void;
	onCollapse: () => void;
}

export const useSidebarDashboard = create<sidebarDashboardProps>((set) => ({
	collapsed: true ,
	onCollapse: () => set(() => ({collapsed : true})),
	onExpand: () => set(() => ({ collapsed: false })),
}))