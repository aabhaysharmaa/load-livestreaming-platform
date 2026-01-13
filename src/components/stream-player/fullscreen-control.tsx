"use client";

import Hint from "@/app/(browser)/_components/sidebar/tooltip";
import { Maximize, Minimize } from "lucide-react";

interface FullScreenControlProps {
	isFullScreen: boolean;
	onToggle: () => void
}

export const FullScreenControl = ({ isFullScreen, onToggle }: FullScreenControlProps) => {
	const Icon = isFullScreen ? Minimize : Maximize;

	const label = isFullScreen ? "Exit fullscreen" : "Enter fullScreen"

	return (
		<div className="flex items-center justify-center gap-4">
			<Hint label={label}  asChild>
				<button
				 onClick={onToggle}
				 className="text-white p-1.5 hover:bg-white/20 rounded-lg"
				>
					<Icon className="size-5"/>
				</button>
			</Hint>
		</div>
	)
}