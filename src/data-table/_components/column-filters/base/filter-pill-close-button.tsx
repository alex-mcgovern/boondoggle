import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../tooltip";
import { Icon } from "../../../../v2-icon";
import { closeButtonCSS, closeIconCSS } from "./filter-pill-close-button.css";

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
