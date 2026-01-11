import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link';

const Action = () => {

	return (
		<Button variant="ghost" >
			<Link href="/" className='flex text-[#727272] hover:text-white/70 flex-row space-x-3 items-center justify-center'>
				<LogOut />
				<span>Exit</span>
			</Link>
		</Button>
	)
}

export default Action
