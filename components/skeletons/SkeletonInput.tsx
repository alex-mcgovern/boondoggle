import { css } from "../../src/styles/utils/util_css.css"; import { Skeleton } from "./Skeleton";

export const SkeletonInput = () => {
	return (
		<div className={css({ marginBottom: "space_4" })}>
			<div className={css({ paddingY: "space_1" })}>
				<Skeleton height="space_4" marginBottom="space_1" width="25%" />
			</div>
			<Skeleton height="space_10" borderRadius="md" />
		</div>
	);
};
