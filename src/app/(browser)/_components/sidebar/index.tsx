import { getRecommended, } from "@/services/recommended-service";
import Recommended, { RecommendedSkeleton } from "./recommended";
import Toggle from "./toggle";
import Wrapper from "./wrapper";

const SideBar = async () => {
	const recommended = await getRecommended();

	return (
		<Wrapper>
			<Toggle />
			<div className="pt-4 ml-6 lg:pt-0">
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}
export default SideBar


export const SidebarSkelton = () => {
	return (
		<aside className="fixed left-0 flex flex-col w-17.5 lg:w-60 h-full bg-[#1E1E1E] border-r border-[#2D2E35] z-50">
			<RecommendedSkeleton />
		</aside>
	)

}