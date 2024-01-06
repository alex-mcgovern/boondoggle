import { Card } from "../card";
import { FieldsGrid } from "../fields-grid";
import { Skeleton } from "../skeleton";
import { SkeletonInput } from "../skeleton-input";

export function SkeletonCardFields({ withTitle }: { withTitle?: boolean }) {
	return (
		<Card>
			{withTitle ? (
				<Skeleton __maxWidth="10rem" marginBottom="space_8" />
			) : null}

			<FieldsGrid>
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
			</FieldsGrid>
		</Card>
	);
}
