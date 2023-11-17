import { Card } from "../card";
import { FieldsGrid } from "../fields-grid";
import { Skeleton } from "../skeleton";
import { SkeletonInput } from "../skeleton-input";

export function SkeletonCardFields({ withTitle }: { withTitle?: boolean }) {
	return (
		<Card>
			{withTitle ? (
				<Skeleton marginBottom="space_8" __maxWidth="10rem" />
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
