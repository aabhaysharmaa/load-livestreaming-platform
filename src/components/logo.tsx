import Image from "next/image"

const Logo = () => {
	return (
		<div className="dragon-logo">
			<Image src="/logos/desktop-logo.webp" alt="logo" width={200} height={100} />
		</div>
	)
}

export default Logo
