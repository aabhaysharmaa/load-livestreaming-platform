import Logo from "@/app/(browser)/_components/navbar/logo"
import { UserButton } from "@clerk/nextjs"
import Action from "./action"


const NavBar = () => {
	return (
		<nav className='h-20  flex items-center px-6 justify-between bg-[#1E1E1E]'>
			<Logo />
			<div className="flex flex-row  space-x-4">
				<Action />
				<UserButton />
			</div>
		</nav>
	)
}

export default NavBar
