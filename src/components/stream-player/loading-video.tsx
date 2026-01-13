import { Loader2 } from "lucide-react";

interface LoadingVideoProps {
	label: string
}

export const LoadingVideo = ({ label }: LoadingVideoProps) => {

	return (
		<div className="h-full flex flex-col space-y-4 justify-center items-center">
			<Loader2 className="size-10 text-white/30 animate-spin" />
			<p className="text-white/20 capitalize">
				{label}
			</p>
		</div>
	)
}