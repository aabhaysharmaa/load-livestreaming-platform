import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
	username: string;
}

export const OfflineVideo = ({username} : OfflineVideoProps) => {

	return (
		<div className="h-full flex flex-col space-y-4 justify-center items-center">
			<WifiOff className="size-10 text-white/20"/>
			<p className="text-white/20">
				{username} is offline
			</p>
		</div>
	)
}