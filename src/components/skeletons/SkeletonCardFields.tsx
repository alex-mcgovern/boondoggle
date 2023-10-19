import { Card } from "../card";
import { FieldsGrid } from "../fields_grid";
import { Skeleton } from "./Skeleton";
import { SkeletonInput } from "./SkeletonInput";

export function SkeletonCardFields() {
	return (
		<Card>
			<Skeleton marginBottom="space_4" maxWidth="25%" />

			<FieldsGrid>
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
			</FieldsGrid>
		</Card>
	);
}
