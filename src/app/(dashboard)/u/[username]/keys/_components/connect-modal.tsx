import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TriangleAlert } from "lucide-react"

const ConnectModal = () => {
	return (
		<Dialog>
			<DialogTrigger asChild >
				<Button className="" variant="primary">Generate</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle className="text-center">Generate Connection</DialogTitle>
				<Select>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Ingress Type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="RTML">RTML</SelectItem>
						<SelectItem value="WHIP">WHIP</SelectItem>
					</SelectContent>
				</Select>
				<Alert>
					<TriangleAlert className="size-4" />
					<AlertTitle>Warning!</AlertTitle>
					<AlertDescription>This action will reset active streams using the current connection</AlertDescription>
				</Alert>
				<div className="flex justify-between items-center">
					<DialogClose>
						<Button variant="ghost">Cancel</Button>
					</DialogClose>
					<Button variant="primary">Generate</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
export default ConnectModal
