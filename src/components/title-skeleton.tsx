import { cn } from "@/lib/utils"
import { Skeleton } from "./ui/skeleton"


export const TitleSkeleton = ({className}  : {className?: string}) => {
	return (
		<div className={cn("flex items-center justify-start py-4  w-full  px-2 ml-4",className)}>
			<Skeleton className="w-30 h-6 bg-[#272727]"  />
		</div>
	)
}


