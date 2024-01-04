import { Card } from "../__DONE__card";
import { FieldsGrid } from "../__DONE__fields-grid";
import { Skeleton } from "../__DONE__skeleton";
import { SkeletonInput } from "../__DONE__skeleton-input";

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
