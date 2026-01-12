import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";

interface UrlCardProps {
	value: string | null;
}

const UrlCard = ({ value }: UrlCardProps) => {
	return (
		<div className="rounded-xl bg-[#1E1E1E] p-6">
			<div className="flex items-center gap-x-10">
				<p className="font-semibold shrink-0">Server URL</p>
				<div className="spacey-2 w-full">
					<div className="w-full flex items-center gap-x-2">
						<Input value={value || ""} disabled placeholder="Server URL" className="ring-0 focus-visible:ring-0 border-none bg-[#121212] "/>
						<CopyButton
						 value={value}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UrlCard
