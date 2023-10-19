import { utilCss } from "../../styles/utils/util_css.css";
import { Skeleton } from "./Skeleton";

export const SkeletonInput = () => {
	return (
		<div className={utilCss({ marginBottom: "space_4" })}>
			<Skeleton height="space_4" marginBottom="space_3" width="25%" />
			<Skeleton height="space_10" marginBottom="space_1" />
		</div>
	);
};
