import { getSelf } from "@/services/auth-service"
import { getStreamByUserId } from "@/services/stream-service";
import ToggleCard from "./_components/toggle-card";

const Chats = async () => {
	const self = await getSelf();
	if (!self) {
		return null
	}
	const stream = await getStreamByUserId(self?.id);
	if (!stream) {
		throw new Error("Stream not found")
	}
	return (
		<div className='p-6 w-full'>
			<div className="mb-4">
				<h1 className='text-2xl font-bold'>Chat Setting</h1>
			</div>
			<div className="space-y-4">
				<ToggleCard
					field="isChatEnabled"
					label="Enabled chat"
					value={stream.isChatEnabled}
				/>
				<ToggleCard
					field="isChatDelayed"
					label="ChatDelayed"
					value={stream.isChatDelayed}
				/>
				<ToggleCard
					field="isChatFollowerOnly"
					label="ChatFollowerOnly"
					value={stream.isChatFollowerOnly}
				/>
			</div>
		</div>
	)
}
export default Chats
