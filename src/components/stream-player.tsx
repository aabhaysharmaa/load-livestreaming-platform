"use client";

import { Stream, User } from "@/generated/prisma/client";
import { useViewerToken } from "@/hooks/use-viewer-token";

interface StreamPlayerProps {
	user: User & {
		stream: Stream | null
	}
	stream: Stream;
	isFollowing: boolean
}

const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
	const { token, name, identity } = useViewerToken(user.id);

	if (!token || !name || !identity) {
		return (
			<div className="">Cannot allowed to watch stream</div>
		)
	}
	return (
		<div>
			Allowed
		</div>
	)
}

export default StreamPlayer
