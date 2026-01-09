import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ReactElement } from 'react';

interface TooltipProviderProps {
	children: ReactElement;
	label: string
	asChild?: boolean
}

const Hint = ({
	children,
	label,
	asChild
}: TooltipProviderProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild={asChild}>
					{children}
				</TooltipTrigger>
				<TooltipContent  className='font-semibold bg-white text-black' side={"right"} >
					{label}
				</TooltipContent>
			</Tooltip>
		 </TooltipProvider>
	)
}

export default Hint;

