import { getSelfByUsername } from "@/services/auth-service";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
interface DashboardLayoutProps {
	params: {
		username: string
	}, children: ReactNode
}

const DashboardLayout = async ({ children, params }: DashboardLayoutProps) => {
	const { username } = await params
	const user = await getSelfByUsername(username)
	if (!user) {
		redirect("/")
	}
	return (
		<>
			<NavBar />
			<div className="flex h-full">
				<Sidebar />
				{children}
			</div>
		</>
	)
}

export default DashboardLayout
