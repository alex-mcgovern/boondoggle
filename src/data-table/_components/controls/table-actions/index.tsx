import { Children } from "react";
import type { ReactNode } from "react";
import { Box } from "../../../../box";

export function TableActions({
	globalFilter,
	columnFilters,
	actions,
	...rest
}: {
	globalFilter?: ReactNode;
	columnFilters: ReactNode;
	actions?: ReactNode;
}) {
	if (!globalFilter && !columnFilters && !actions) {
		return null;
	}

	return (
		<Box
			alignItems="center"
			borderBottom="border_default"
			display="flex"
			gap="space_2"
			marginTop="space_4"
			paddingBottom="space_4"
			{...rest}
		>
			{globalFilter}
			{columnFilters}
			{actions && (
				<Box
					alignItems="center"
					display="flex"
					gap="space_2"
					marginLeft="auto"
				>
					{Children.map(actions, (action) => {
						return action;
					})}
				</Box>
			)}
		</Box>
	);
}
