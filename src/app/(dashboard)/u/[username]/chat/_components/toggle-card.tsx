"use client";

import { upStream } from "@/actions/stream";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";


type FiledTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowerOnly"
interface ToggleCardProps {
	field: FiledTypes
	label: string
	value: boolean
}

const ToggleCard = ({
	field,
	label,
	value = false
}: ToggleCardProps) => {
	const [isPending, startTransition] = useTransition()

	const handleChange = (checked: boolean) => {
		startTransition(() => {
			upStream({ [field]: checked })
				.then(() => {
					toast.success("Chat Settings updated!")
				})
				.catch(() => {
					toast.error("Something went Wrong")
				})
		})
	}
	return (
		<div className="rounded-xl bg-[#252525] p-6">
			<div className="flex items-center  justify-between">
				<p className="font-semibold shrink-0">
					{label}
				</p>
				<div className="space-y-2 ">
					<Switch
						checked={value}
						onCheckedChange={handleChange}
						disabled={isPending}
						className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500"
					/>
				</div>
			</div>
		</div>
	)
}

export default ToggleCard;
