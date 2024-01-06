import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";

import { Icon } from "../../../../icon";
import { openButtonCSS, openIconCSS } from "./filter-pill-open-button.css";

export const FilterPillOpenButton = ({
	disabled,
	isFiltered,
	pillText,
	toggleIsOpen,
	wasFiltered,
}: {
	disabled: boolean | undefined;
	isFiltered: boolean;
	pillText: React.ReactNode;
	toggleIsOpen: () => void;
	wasFiltered: boolean | undefined;
}) => {
	return (
		<button
			className={openButtonCSS}
			disabled={disabled}
			onClick={toggleIsOpen}
			type="button"
		>
			{!isFiltered ? (
				<Icon
					className={openIconCSS({
						shouldAnimate: wasFiltered,
					})}
					icon={faCirclePlus}
				/>
			) : null}
			{pillText}
		</button>
	);
};
