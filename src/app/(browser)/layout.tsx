import React, { ReactNode, Suspense } from 'react'
import NavBar from './_components/navbar'
import SideBar, { SidebarSkelton } from './_components/sidebar'
import Container from './_components/container'


const BrowserLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar />
			<div className="w-full h-full  flex">
				<Suspense fallback={<SidebarSkelton/>}>
				<SideBar />
				</Suspense>
				<Container>
					{children}
				</Container>
			</div>
		</>
	)
}

export default BrowserLayout
