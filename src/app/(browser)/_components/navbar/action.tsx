import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";



const Action = async () => {
	const user = await currentUser();
	return (
		<div className='px-4'>
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
						asChild
						size="sm"
						variant={"ghost"}
						className="mx-4 flex text-[#757575]   items-center justify-center space-x-2 cursor-pointer">
						<Link href={`/u/${user.username}`}>
						<Clapperboard className="size-5" />
						<span className="font-semibold hidden md:flex">Dashboard</span>
						</Link>
					</Button>
					<UserButton />
				</div>
			)}
		</div>
	)
}

export default Action
