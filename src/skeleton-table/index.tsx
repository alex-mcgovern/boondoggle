import { Box } from "../box";
import { tableCellCSS, tableHeaderCellCSS } from "../data-table/styles.css";
import { Skeleton } from "../skeleton";

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const SkeletonTable = () => {
	return (
		<>
			<Box
				gap="space_2"
				display="flex"
				alignItems="center"
				marginY="space_3"
			>
				<Skeleton height="space_8" borderRadius="md" __width="12rem" />
				{Array.from({ length: 4 }).map(() => {
					return (
						<Skeleton
							height="space_8"
							borderRadius="pill"
							__width={`${random(4, 8)}rem`}
						/>
					);
				})}
			</Box>
			<Box
				borderTop="border_default"
				display="grid"
				__gridTemplateColumns="2fr min-content min-content min-content"
			>
				{Array.from({ length: 4 }).map(() => {
					return (
						<div className={tableHeaderCellCSS}>
							<Skeleton
								height="space_4"
								borderRadius="sm"
								__width={`${random(4, 8)}rem`}
							/>
						</div>
					);
				})}

				{Array.from({ length: 10 }).map(() => {
					return (
						<>
							<Box gap="space_3" className={tableCellCSS}>
								<Skeleton
									height="space_8"
									width="space_8"
									borderRadius="50%"
								/>
								<Skeleton
									height="space_4"
									borderRadius="sm"
									__width={`${random(4, 8)}rem`}
								/>
							</Box>
							{Array.from({ length: 3 }).map(() => {
								return (
									<div className={tableCellCSS}>
										<Skeleton
											height="space_4"
											borderRadius="sm"
											__width={`${random(4, 8)}rem`}
										/>
									</div>
								);
							})}
						</>
					);
				})}
			</Box>
		</>
	);
};
