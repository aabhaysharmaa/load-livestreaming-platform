import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";



const Action = async () => {
	const user = await currentUser();
	return (
		<div className='mr-5'>
			{!user && (
				<div className="">
					<SignInButton>
						<Button
							variant="gray"
						>
							LogIn
						</Button>
					</SignInButton>
				</div>
			)}
			{!!user && (
				<div className="flex items-center justify-center">
					<Button
						size="sm"
						className="mx-4 flex text-[#757575] hover:text-white/60 items-center justify-center space-x-2 cursor-pointer">
						<Clapperboard className="size-5" />
						<span className="font-semibold hidden md:flex">Dashboard</span>
					</Button>
					<UserButton />
				</div>
			)}
		</div>
	)
}

export default Action
