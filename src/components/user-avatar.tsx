import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LiveBadge from "@/app/(browser)/_components/live-badge";
const avatarSizes = cva(
	"",
	{
		variants: {
			sizes: {
				default: "h-8 w-8",
				lg: "h-14 w-14"
			}
		}, defaultVariants: {
			sizes: "default"
		}
	}
)

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
	username: string
	imageUrl: string
	isLive?: boolean
	showBadge?: boolean
}

const UserAvatar = ({
	username,
	imageUrl,
	isLive,
	showBadge,
	sizes
}: UserAvatarProps) => {
	const canShowBadge = showBadge && isLive;
	return (
		<div className="relative inline-block">
			<Avatar className={cn("", isLive && " ring-2 ring-rose-500 border border-[#757575]", avatarSizes({ sizes }))}>
				<AvatarImage src={imageUrl} className="object-cover" />
				<AvatarFallback>
					{username[0]}
					{username[username.length - 1]}
				</AvatarFallback>
			</Avatar>
			{canShowBadge && (
				<div className=" absolute z-50 -bottom-2 left-1/2 transform -translate-x-1/2">
					<LiveBadge className="lg:ml-auto" />
				</div>
			)}
		</div>
	)
}

export default UserAvatar


type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;

export const UserAvatarSkeleton = ({ sizes }: UserAvatarSkeletonProps) => {
	return (
		<Skeleton
			className={cn("rounded-full", avatarSizes({ sizes }))}
		/>
	)
}


