"use client";

import { Stream, User } from "@/generated/prisma/client";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { LiveKitRoom } from "@livekit/components-react";
import Video from "./video";
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
		<>
			<LiveKitRoom
				token={token}
				serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
				className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 h-full"
			>
				<div className="col-span-1 lg:col-span-4 xl:col-span-4 2xl:col-span-6 space-y-4 hidden-scrollbar overflow-y-auto pb-10 h-full">
					<Video
						hostName={user.username}
						hostIdentity={user.id}
					/>
				</div>
			</LiveKitRoom>
		</>
	)
}

export default StreamPlayer
