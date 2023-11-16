import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons";
import { Icon } from "../../../../icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../tooltip";
import * as styles from "./FilterPillCloseButton.css";

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
					className={styles.closeButton}
				>
					<Icon className={styles.closeIcon} icon={faCirclePlus} />
				</button>
			</TooltipTrigger>
		</Tooltip>
	);
};
