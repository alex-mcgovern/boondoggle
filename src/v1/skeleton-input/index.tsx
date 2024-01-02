import { Skeleton } from "../skeleton";
import { sprinkles } from "../sprinkles/index.css";

export const SkeletonInput = () => {
	return (
		<div className={sprinkles({ marginBottom: "space_4" })}>
			<div className={sprinkles({ paddingY: "space_1" })}>
				<Skeleton height="space_4" marginBottom="space_1" width="25%" />
			</div>
			<Skeleton height="space_10" borderRadius="md" />
		</div>
	);
};
