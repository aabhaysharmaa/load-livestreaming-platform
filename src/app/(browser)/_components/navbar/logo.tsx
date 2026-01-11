import Image from "next/image"
import Link from "next/link"

const Logo = () => {
	return (
		<div className="flex items-center ml-6 mr-6">
			<div className="dragon-logo mt-3 hidden md:flex shrink-0">
				<Link href="/">
					<Image src="/logos/desktop-logo.webp" alt="logo" width={60} height={80} />

				</Link>
			</div>
			<div className="dragon-logo mt-1 flex md:hidden shrink-0">
				<Link href="/">
					<Image src="/logos/mobile-logo.webp" alt="logo" width={60} height={80} />

				</Link>
			</div>
		</div>
	)
}

export default Logo
