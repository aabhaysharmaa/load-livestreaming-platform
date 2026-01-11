import { getSelf } from "@/services/auth-service";
import Image from "next/image";

const Title = async () => {
	const user = await getSelf();
	return (
		<div>
			<p className="font-semibold flex space-x-2 items-center justify-center text-[#757575]">
					<Image src={"/dragon.svg"} alt="dragon" className="text-sky-400"  width={70} height={70} />
				<span>Welcome</span>
				<span className="">{user?.username}</span>
			</p>
		</div>
	)
}

export default Title
