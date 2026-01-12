"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react"

interface CopyButtonProps {
	value: string | null
}

const CopyButton = ({ value }: CopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const Icon = isCopied ? CheckCheck : Copy
	const onCopy = () => {
		if (!value) return
		navigator.clipboard.writeText(value)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}
	return (
		<Button variant={"gray"} onClick={onCopy}  disabled={!value} >
			<Icon />
		</Button>
	)
}

export default CopyButton
