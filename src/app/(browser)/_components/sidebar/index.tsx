import { getRecommended, } from "@/services/recommended-service";
import Recommended, { RecommendedSkeleton } from "./recommended";
import Toggle, { ToggleSkeleton } from "./toggle";
import Wrapper from "./wrapper";
import Following from "./following";
import { getFollowUsers } from "@/services/follow-service";

const SideBar = async () => {
	const recommended = await getRecommended();
	const follow = await getFollowUsers();
	return (
		<Wrapper>
			<Toggle />
			<div className="pt-4 px-2">
				<Recommended data={recommended || []} />
				<Following data={follow} />
			</div>
		</Wrapper>
	)
}
export default SideBar


export const SidebarSkelton = () => {
	return (
		<aside className="fixed left-0 flex flex-col w-17.5 lg:w-60 h-full bg-[#1E1E1E] border-r border-[#2D2E35] z-50">
			<ToggleSkeleton />
			<RecommendedSkeleton />
		</aside>
	)

}