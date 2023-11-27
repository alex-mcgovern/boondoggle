import { Skeleton } from "../skeleton";
import { sprinkles } from "../sprinkles/index.css";
import { WithSize } from "../types";
import { skeletonInputCSS } from "./styles.css";

export const SkeletonInput = ({ size = "sm" }: WithSize) => {
	return (
		<div className={sprinkles({ marginBottom: "space_4" })}>
			<div className={sprinkles({ paddingY: "space_1" })}>
				<Skeleton height="space_4" marginBottom="space_1" width="25%" />
			</div>
			<Skeleton className={skeletonInputCSS({ size })} />
		</div>
	);
};
