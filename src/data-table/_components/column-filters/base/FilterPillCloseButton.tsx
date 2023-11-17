import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";
import { Icon } from "../../../../icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../tooltip";
import { closeButtonCSS, closeIconCSS } from "./FilterPillCloseButton.css";

export const FilterPillCloseButton = ({
	clearFilters,
	setIsOpen,
}: {
	clearFilters: () => void;
	setIsOpen: (isOpen: boolean) => void;
}) => {
	return (
		<Tooltip placement="top">
			<TooltipContent>Clear filter</TooltipContent>
			<TooltipTrigger asChild>
				<button
					type="button"
					onClick={() => {
						clearFilters();
						setIsOpen(false);
					}}
					className={closeButtonCSS}
				>
					<Icon className={closeIconCSS} icon={faCirclePlus} />
				</button>
			</TooltipTrigger>
		</Tooltip>
	);
};
