import { cn } from "@/lib/utils"

interface LiveBadgeProps {
	className?: string
}

const LiveBadge = ({ className }: LiveBadgeProps) => {
	return (
		<div className={cn("bg-rose-500 text-center rounded-md  tracking-wide border-[#757575] font-semibold uppercase text-[10px] p-0.5 px-1.5 ", className)}>
			live
		</div>
	)
}

export default LiveBadge
