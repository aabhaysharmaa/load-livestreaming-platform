"use client";

import { createIngress } from "@/actions/ingress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IngressInput } from "livekit-server-sdk"
import { TriangleAlert } from "lucide-react"
import { useRef, useState, useTransition } from "react"
import { toast } from "sonner";

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP ;

const ConnectModal = () => {
	const [ingressType, setIngressType] = useState<IngressType>(RTMP)
	const [isPending, startTransition] = useTransition();
   const closeRef = useRef<HTMLButtonElement | null >(null);
	const onSubmit = () => {
		startTransition(() => {
			createIngress(parseInt(ingressType)).then(() =>{
				closeRef?.current?.click();
				toast.success("Ingress Created")
			}).catch(() => {
				toast.error("Something Went Wrong!")
			})
		})
	}

	return (
		<Dialog>
			<DialogTrigger asChild >
				<Button className="" variant="primary">Generate</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle className="text-center">Generate Connection</DialogTitle>
				<Select
					disabled={isPending}
					value={ingressType}
					onValueChange={(value) => setIngressType(value)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Ingress Type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={RTMP}>RTML</SelectItem>
						<SelectItem value={WHIP}>WHIP</SelectItem>
					</SelectContent>
				</Select>
				<Alert>
					<TriangleAlert className="size-4" />
					<AlertTitle>Warning!</AlertTitle>
					<AlertDescription>This action will reset active streams using the current connection</AlertDescription>
				</Alert>
				<div className="flex justify-between items-center">
					<DialogClose ref={closeRef} asChild>
						<Button  variant="ghost">Cancel</Button>
					</DialogClose>
					<Button onClick={onSubmit} disabled={isPending} variant="primary">Generate</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
export default ConnectModal
