import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import type { WithOptionalPlaceholder } from "../../../../types";
import { Icon } from "../../../icon";
import { Input } from "../../../input";
import type { useDataTableState } from "../../_lib/useDataTableState";

export function TableGlobalFilterInput({
	disabled,
	globalFilter = "",
	placeholder,
	setGlobalFilter,
	strClearFilterInput,
}: Required<WithOptionalPlaceholder> & {
	disabled?: boolean;
	globalFilter: ReturnType<typeof useDataTableState>["globalFilter"];
	setGlobalFilter: ReturnType<typeof useDataTableState>["setGlobalFilter"];
	strClearFilterInput: string;
}) {
	return (
		<Input
			autoComplete="off"
			disabled={disabled}
			hideLastpass
			isClearable
			name="filter"
			onChange={(e) => {
				return setGlobalFilter(e.target.value);
			}}
			placeholder={placeholder}
			slotLeft={<Icon icon={faSearch} />}
			strClear={strClearFilterInput}
			type="search"
			value={globalFilter}
			marginBottom="none"
		/>
	);
}
