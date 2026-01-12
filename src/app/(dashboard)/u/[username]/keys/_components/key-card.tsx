"use client";

import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface KeyCardProps {
	value: string | null
}

const KeyCard = ({ value }: KeyCardProps) => {
	const [showPassword, isShowPassword] = useState(false)
	return (
		<div className="rounded-xl bg-[#1E1E1E] p-6">
			<div className="flex items-center gap-x-10">
				<p className="font-semibold shrink-0">Stream key</p>
				<div className="w-full space-x-2">
					<div className="w-full flex items-center gap-x-2">
						<Input  disabled type={showPassword ? "text" : "password"} className="ring-0 border-none bg-[#121212] focus-visible:ring-0 " placeholder="Stream Key" />
						<CopyButton value={value} />
					</div>
					<Button variant="ghost" onClick={() => isShowPassword((value) => !value)} className="text-sm mt-2 ml-2 hover:underline cursor-pointer">Show</Button>
				</div>
			</div>

		</div>
	)
}

export default KeyCard
