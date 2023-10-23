import { Card } from "../card/Card";
import { FieldsGrid } from "../fields-grid";
import { Skeleton } from "./Skeleton";
import { SkeletonInput } from "./SkeletonInput";

export function SkeletonCardFields() {
	return (
		<Card>
			<Skeleton marginBottom="space_8" __maxWidth="10rem" />

			<FieldsGrid>
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
				<SkeletonInput />
			</FieldsGrid>
		</Card>
	);
}
