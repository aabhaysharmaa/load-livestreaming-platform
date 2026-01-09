import Image from "next/image"

const Logo = () => {
	return (
		<div className="flex items-center justify-center ml-6 mr-6">
			<div className="dragon-logo mt-3 hidden md:flex shrink-0">
				<Image src="/logos/desktop-logo.webp" alt="logo" width={60} height={80} />
			</div>
			<div className="dragon-logo mt-3 flex md:hidden shrink-0">
				<Image src="/logos/mobile-logo.webp" alt="logo" width={60} height={80} />
			</div>
		</div>
	)
}

export default Logo
