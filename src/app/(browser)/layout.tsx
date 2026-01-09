import React, { ReactNode } from 'react'
import NavBar from './_components/navbar'

const BrowserLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar />
			<div className="w-full h-full">
				{children}
			</div>
		</>
	)
}

export default BrowserLayout
