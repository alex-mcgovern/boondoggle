import * as RadixSlot from "@radix-ui/react-slot";

import { arrayHasLength } from "../../lib/array_has_length";
import { useDataTableState } from "../../lib/use_data_table_state";
import { useDialogModalState } from "../../lib/use_dialog_modal_state";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { tableStyles } from "../../styles/stylesheet.css";
import { Box } from "../box";
import { DataTableActionsWrapper } from "../data_table/_components/data_table_actions_wrapper";
import { DataTableControlPagination } from "../data_table/_components/data_table_control_pagination";
import { DataTableFilterInput } from "../data_table/_components/data_table_filter_input";
import { DataTableInfoNoResults } from "../data_table/_components/data_table_info_no_results";
import { DataTableInfoPageCount } from "../data_table/_components/data_table_info_page_count";
import { DataTableLayoutBody } from "../data_table/_components/data_table_layout_body";
import { DataTableLayoutHead } from "../data_table/_components/data_table_layout_head";
import { DialogModalActions } from "../dialog_modal_actions";
import { DialogModalContent } from "../dialog_modal_content";
import { DialogModalErrorMessage } from "../dialog_modal_error_message";
import { DialogModalHeader } from "../dialog_modal_header";
import { DialogModalInner } from "../dialog_modal_inner";
import { DialogModalOuter } from "../dialog_modal_outer";
import { LoaderFullScreen } from "../loader_full_screen";

import type { ColumnDef, RowData, SortingState } from "@tanstack/react-table";
import type { ForwardedRef, ReactNode } from "react";
import type {
	WithTableOptionalFiltering,
	WithTableOptionalPagination,
	WithTableOptionalSelectableRows,
} from "../../common-types";
import type { BoxProps } from "../box";
import type { DialogModalInnerWidth } from "../dialog_modal_inner/styles.css";

export type DialogModalDataTableProps<TData> = WithTableOptionalPagination &
	WithTableOptionalSelectableRows<TData> &
	WithTableOptionalFiltering & {
		/**
		 * Up to 2 react nodes to render as actions for the table
		 */
		actions?: ReactNode | [ReactNode?, ReactNode?];

		/**
		 * Alert component that will be rendered above the form.
		 */
		alert?: ReactNode;

		/**
		 * Column definitions for the tabular data
		 */

		// biome-ignore lint/suspicious/noExplicitAny: any is required here because of how React-table's types are defined
		columns: Array<ColumnDef<TData, any>>;

		/**
		 * An array of objects describing each row in the table
		 */
		data: Array<TData> | undefined;

		/**
		 * React ref that will be passed to the dialog modal.
		 */
		dialogRef?: ForwardedRef<HTMLDialogElement>;

		/**
		 * The initial sorting state of the table
		 */
		initialSorting?: SortingState;

		/**
		 * Whether the dialog modal is in an error state.
		 */
		isError?: boolean;

		/**
		 * Whether the dialog modal is loading.
		 */
		isLoading?: boolean;

		/**
		 * Whether the table should be sortable and show sorting controls
		 */
		isSortable?: boolean;

		/**
		 * Function to call when the "Try again" button is clicked.
		 */
		onClickTryAgain?:
			| (() => unknown)
			| (() => Promise<unknown>)
			| undefined;

		/**
		 * Description of the error.
		 */
		strErrorDescription?: string;

		/**
		 * Title of the error.
		 */
		strErrorTitle?: string;

		/**
		 * The title of the no results message
		 */
		strNoResults: string;

		/**
		 * Text for the "Try again" button.
		 */
		strTryAgain?: string | undefined;

		/**
		 * Title of the dialog modal.
		 */
		title: string;

		/**
		 * Node that will trigger the dialog modal when clicked.
		 */
		triggerNode?: ReactNode;

		/**
		 * Width of the dialog modal.
		 */
		width: DialogModalInnerWidth;

		/**
		 * Props that will be passed to the wrapper `Box` component.
		 */
		wrapperProps?: BoxProps;
	};

/**
 * Combines a dialog with a data table, which has additional styling requirements, such as putting the data table controls (e.g. pagination) at the bottom of the dialog.
 */
export function DialogModalDataTable<TData extends RowData>({
	actions,
	alert,
	columns: initColumns,
	data,
	dialogRef: parentDialogRef,
	enableMultiRowSelection = false,
	initialSorting,
	isError,
	isFilterable,
	isLoading,
	isPaginated,
	isSelectable,
	isSortable,
	onClickTryAgain,
	onSelect,
	strClearAllFilters,
	strClearFilterInput,
	strErrorDescription,
	strErrorTitle,
	strFilterPlaceholder,
	strNext,
	strNoResults,
	strPage,
	strPrev,
	strResults,
	strTryAgain,
	title,
	triggerNode,
	width,
	wrapperProps,
}: DialogModalDataTableProps<TData>) {
	const { closeDialog, dialogRef, toggleIsOpen, triggerRef } =
		useDialogModalState({
			ref: parentDialogRef,
		});

	const { globalFilter, setGlobalFilter, table } = useDataTableState({
		data,
		enableMultiRowSelection,
		initColumns,
		initialSorting,
		isFilterable,
		isLoading,
		isPaginated,
		isSelectable,
		isSortable,
		onSelect,
	});

	const hasData = arrayHasLength(table.getFilteredRowModel().rows);

	return (
		<Box
			className={variantColorOverlay.default}
			position="relative"
			{...wrapperProps}
		>
			{triggerNode && (
				<RadixSlot.Slot onClick={toggleIsOpen} ref={triggerRef}>
					{triggerNode}
				</RadixSlot.Slot>
			)}

			<DialogModalOuter dialogRef={dialogRef}>
				<DialogModalInner width={width}>
					<DialogModalHeader
						closeDialog={closeDialog}
						title={title}
					/>

					{!isLoading &&
						isError &&
						strErrorDescription &&
						strErrorTitle && (
							<DialogModalErrorMessage
								description={strErrorDescription}
								title={strErrorTitle}
							/>
						)}

					{!isError && isLoading && <LoaderFullScreen />}

					{!isError && !isLoading && (
						<DataTableActionsWrapper
							leftAction={
								isFilterable && arrayHasLength(data) ? (
									<DataTableFilterInput
										globalFilter={globalFilter}
										placeholder={strFilterPlaceholder}
										setGlobalFilter={setGlobalFilter}
										strClearFilterInput={
											strClearFilterInput
										}
									/>
								) : null
							}
							paddingX="space_4"
							rightActions={actions}
						/>
					)}

					{!isError && !isLoading && (
						<DialogModalContent alert={alert} hasPadding={false}>
							{hasData && (
								<Box className={tableStyles}>
									<DataTableLayoutHead<TData>
										isSortable={isSortable}
										isSelectable={isSelectable}
										hasRowActions={undefined}
										table={table}
									/>
									<DataTableLayoutBody<TData>
										isSelectable={isSelectable}
										hasRowActions={undefined}
										table={table}
									/>{" "}
								</Box>
							)}

							{!hasData && (
								<DataTableInfoNoResults
									globalFilter={globalFilter}
									setGlobalFilter={setGlobalFilter}
									strClearAllFilters={
										strClearAllFilters as string
									}
									strNoResults={strNoResults}
								/>
							)}
						</DialogModalContent>
					)}

					{!isLoading && (
						<DialogModalActions
							actions={
								!isError && isPaginated ? (
									<Box
										alignItems="center"
										display="flex"
										gap="space_2"
									>
										{strPage && strResults && (
											<DataTableInfoPageCount<TData>
												strPage={strPage}
												strResults={strResults}
												table={table}
											/>
										)}

										<DataTableControlPagination<TData>
											strNext={strNext}
											strPrev={strPrev}
											table={table}
										/>
									</Box>
								) : undefined
							}
							closeDialog={closeDialog}
							isError={isError}
							onClickTryAgain={onClickTryAgain}
							shouldCloseOnAction={false}
							strTryAgain={strTryAgain}
						/>
					)}
				</DialogModalInner>
			</DialogModalOuter>
		</Box>
	);
}
