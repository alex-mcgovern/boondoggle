import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";
import { Icon } from "../../../../__DONE__icon";
import { openButtonCSS, openIconCSS } from "./filter-pill-open-button.css";

export const FilterPillOpenButton = ({
	disabled,
	toggleIsOpen,
	isFiltered,
	wasFiltered,
	pillText,
}: {
	disabled: boolean | undefined;
	toggleIsOpen: () => void;
	wasFiltered: boolean | undefined;
	isFiltered: boolean;
	pillText: React.ReactNode;
}) => {
	return (
		<button
			className={openButtonCSS}
			type="button"
			disabled={disabled}
			onClick={toggleIsOpen}
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
