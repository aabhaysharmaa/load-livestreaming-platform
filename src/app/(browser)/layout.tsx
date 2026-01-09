import React, { ReactNode } from 'react'
import NavBar from './_components/navbar'
import SideBar from './_components/sidebar'
import Container from './_components/container'


const BrowserLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar />
			<div className="w-full h-full overflow-y-hidden flex">
				<SideBar />
				<Container>
					{children}
				</Container>
			</div>
		</>
	)
}

export default BrowserLayout
