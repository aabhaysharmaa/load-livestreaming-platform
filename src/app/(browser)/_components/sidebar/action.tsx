"use client";

import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
	userId: string
	isFollowing: boolean
}

const Action = ({ userId, isFollowing }: ActionProps) => {
	const [isPending, startTransition] = useTransition();
	console.log("IS Following", isFollowing)
	const onClickFollow = () => {
		startTransition(() => {
			onFollow(userId).then((data) => {
				toast.success(`Followed user ${data.following.username}`)
			}).catch(() => {
				toast.error("Something went wrong!")
			})
		})
	}
	const onClickUnFollow = () => {
		startTransition(() => {
			onUnFollow(userId).then((data) => {
				toast.success(`unFollowed ${data.follower.username}`)
			}).catch(() => {
				toast.error("Something went wrong!")
			})
		})
	}

	const onClick = () => {
		if (isFollowing) {
			onClickUnFollow();
		} else{
			onClickFollow();
		}
	}

	return (
		<div>
			<Button disabled={isPending} onClick={onClick} variant="gray">
				{isFollowing ? "unfollow" : "follow"}
			</Button>
		</div>
	)
}

export default Action
