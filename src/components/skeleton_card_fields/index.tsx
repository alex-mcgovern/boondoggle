import { Card } from "../card";
import { FieldsGrid } from "../fields_grid";
import { Skeleton } from "../skeleton";

export function SkeletonCardFields() {
    return (
        <Card>
            <Skeleton
                marginBottom="space_4"
                maxWidth="25%"
            />

            <FieldsGrid>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </FieldsGrid>
        </Card>
    );
}
