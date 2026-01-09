import React from 'react'
import Logo from './logo'
import Search from './search'
import Action from './action'

const NavBar = () => {
	return (
		<nav className='h-20 bg-[#1E1E1E] w-full z-49   flex items-center justify-between'>
			<Logo />
			<Search />
			<Action/>
		</nav>
	)
}

export default NavBar
