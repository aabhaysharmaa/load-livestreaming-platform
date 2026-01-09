import Logo from '@/components/logo'
import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex w-full flex-col  items-center justify-center min-h-full'>
			<Logo/>
			{children}
		</div>
	)
}

export default AuthLayout
