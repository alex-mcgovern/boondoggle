import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../../../../_DEPRECATED_tooltip";
import { Icon } from "../../../../icon";
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
					className={closeButtonCSS}
					onClick={() => {
						clearFilters();
						setIsOpen(false);
					}}
					type="button"
				>
					<Icon className={closeIconCSS} icon={faCirclePlus} />
				</button>
			</TooltipTrigger>
		</Tooltip>
	);
};
