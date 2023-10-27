import { Card } from "../card/Card";
import { FieldsGrid } from "../fields_grid";
import { Skeleton } from "./Skeleton";
import { SkeletonInput } from "./SkeletonInput";

export function SkeletonCardFields({ withTitle = true }: { withTitle?: boolean }) {
	return (
		<Card>
			{withTitle ? <Skeleton marginBottom="space_8" __maxWidth="10rem" /> : null}

			<FieldsGrid>
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
			</FieldsGrid>
		</Card>
	);
}
