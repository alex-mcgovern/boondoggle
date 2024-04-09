import { css } from "../css/index.css";
import { Skeleton } from "../skeleton";

export function SkeletonInput() {
    return (
        <div className={css({ marginBottom: "space_4" })}>
            <div className={css({ paddingY: "space_1" })}>
                <Skeleton
                    height="space_4"
                    marginBottom="space_1"
                    width="25%"
                />
            </div>
            <Skeleton
                borderRadius="md"
                height="space_10"
            />
        </div>
    );
}
