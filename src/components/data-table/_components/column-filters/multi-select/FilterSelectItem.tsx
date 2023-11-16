import { Box } from "../../../../box/_components/Box";
import * as styles from "./FilterSelectItem.css";

export const FilterSelectItem = ({
	defaultChecked,
	label,
	value,
	handleSelection,
}: {
	handleSelection: (value: string) => void;
	defaultChecked: boolean | undefined;
	label: string;
	value: string;
}) => {
	return (
		<Box
			className={styles.selectItemLabel}
			as="label"
			htmlFor={`item_${value}`}
			display="flex"
			alignItems="center"
			gap="space_2"
			marginBottom="space_4"
		>
			<Box
				value={value}
				as="input"
				defaultChecked={defaultChecked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleSelection(e.target.value)
				}
				// tabIndex={-1}
				type="checkbox"
				id={`item_${value}`}
			/>
			<div className={styles.selectItemLabelText}>{label}</div>
		</Box>
	);
};
