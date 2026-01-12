"use client";

import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
	userId: string
	isFollowing: boolean
	isBlocked: boolean
}

const Action = ({ userId, isFollowing, isBlocked }: ActionProps) => {
	const [isPendingFollow, startTransitionFollow] = useTransition();
	const [isPendingBlock, startTransitionBlock] = useTransition();
	console.log("IS Following", isFollowing)
	const onClickFollow = () => {
		startTransitionFollow(() => {
			onFollow(userId).then((data) => {
				toast.success(`Followed user ${data.following.username}`)
			}).catch(() => {
				toast.error("Something went wrong!")
			})
		})
	}
	const onClickUnFollow = () => {
		startTransitionFollow(() => {
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
		} else {
			onClickFollow();
		}
	}
	const onClickBlock = () => {
		startTransitionBlock(() => {
			onBlock(userId).then((data) => {
				toast.success(`Blocked ${data.blocked.username}`)
			}).catch(() => {
				toast.error("Something went Wrong")
			})
		})
	}
	const onClickUnBlock = () => {
		startTransitionBlock(() => {
			onUnBlock(userId).then((data) => {
				toast.success(`unBlocked ${data.blocker.username}`)
			}).catch(() => {
				toast.error("Something went Wrong")
			})
		})
	}

	const onHandleBlock = () => {
		if (isBlocked) {
			onClickUnBlock()
		} else {
			onClickBlock()
		}
	}

	return (
		<div className="space-x-4">
			<Button disabled={isPendingFollow} onClick={onClick} variant="ghost">
				{isFollowing ? "unfollow" : "follow"}
			</Button>
			<Button disabled={isPendingBlock} onClick={onHandleBlock} variant="ghost">
				{isBlocked ? "unblock" : "block"}
			</Button>
		</div>
	)
}

export default Action
