import { faCirclePlus } from "@fortawesome/pro-solid-svg-icons/faCirclePlus";
import { Icon } from "../../../../icon";
import * as styles from "../base/FilterPillOpenButton.css";

export const FilterPillOpenButton = ({
	disabled,
	toggleIsOpen,
	wasOpen,
	isFiltered,
	pillText,
}: {
	disabled: boolean | undefined;
	toggleIsOpen: () => void;
	wasOpen: boolean | undefined;
	isFiltered: boolean;
	pillText: React.ReactNode;
}) => {
	return (
		<button
			className={styles.openButton}
			type="button"
			disabled={disabled}
			onClick={toggleIsOpen}
		>
			{!isFiltered ? (
				<Icon
					className={wasOpen ? styles.openIcon : undefined}
					icon={faCirclePlus}
				/>
			) : null}
			{pillText}
		</button>
	);
};
