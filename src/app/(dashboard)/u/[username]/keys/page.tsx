import { getSelf } from "@/services/auth-service";
import { getStreamByUserId } from "@/services/stream-service";
import ConnectModal from "./_components/connect-modal";
import KeyCard from "./_components/key-card";
import UrlCard from "./_components/url-card";

const Keys = async () => {
	const self = await getSelf()
	if (!self) {
		return null
	}
	const stream = await getStreamByUserId(self.id);
	if (!stream) {
		throw new Error("Stream Not Found")
	}
	return (
		<div className="p-6 w-full" >
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-2xl font-bold">Keys & URLs</h1>
				<ConnectModal />
			</div>
			<div className="space-y-4">
				<UrlCard
					value={stream.serverUrl}
				/>
				<KeyCard
					value={stream.streamKey}
				/>
			</div>
		</div>
	)
}

export default Keys
