import { Box } from "../box";
import { tableCellCSS, tableHeaderCellCSS } from "../data-table/styles.css";
import { Skeleton } from "../skeleton";

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function SkeletonSearch() {
	return <Skeleton height="space_8" borderRadius="md" __width="12rem" />;
}

function SkeletonFilterPill() {
	return (
		<Skeleton
			height="space_8"
			borderRadius="pill"
			__width={`${random(4, 8)}rem`}
		/>
	);
}

function SkeletonFilters() {
	return (
		<Box gap="space_2" display="flex" alignItems="center" marginY="space_3">
			<SkeletonSearch />
			<SkeletonFilterPill />
			<SkeletonFilterPill />
			<SkeletonFilterPill />
		</Box>
	);
}

function SkeletonHeaderCell() {
	return (
		<div className={tableHeaderCellCSS}>
			<Skeleton
				height="space_4"
				borderRadius="sm"
				__width={`${random(4, 8)}rem`}
			/>
		</div>
	);
}

function SkeletonCell() {
	return (
		<div className={tableCellCSS}>
			<Skeleton
				height="space_4"
				borderRadius="sm"
				__width={`${random(4, 8)}rem`}
			/>
		</div>
	);
}

function SkeletonCellWithAvatar() {
	return (
		<Box gap="space_3" className={tableCellCSS}>
			<Skeleton height="space_8" width="space_8" borderRadius="50%" />
			<Skeleton
				height="space_4"
				borderRadius="sm"
				__width={`${random(4, 12)}rem`}
			/>
		</Box>
	);
}

function SkeletonRow() {
	return (
		<>
			<SkeletonCellWithAvatar />
			<SkeletonCell />
			<SkeletonCell />
			<SkeletonCell />
		</>
	);
}

function SkeletonHeaderRow() {
	return (
		<>
			<SkeletonHeaderCell />
			<SkeletonHeaderCell />
			<SkeletonHeaderCell />
			<SkeletonHeaderCell />
		</>
	);
}

export const SkeletonTable = () => {
	return (
		<>
			<SkeletonFilters />
			<Box
				borderTop="border_default"
				display="grid"
				__gridTemplateColumns="2fr min-content min-content min-content"
			>
				<SkeletonHeaderRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
			</Box>
		</>
	);
};
