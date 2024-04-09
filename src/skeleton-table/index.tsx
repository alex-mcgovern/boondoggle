import { Box } from "../box";
import { Skeleton } from "../skeleton";

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function SkeletonSearch() {
    return (
        <Skeleton
            __width="12rem"
            borderRadius="md"
            height="space_8"
        />
    );
}

function SkeletonFilterPill() {
    return (
        <Skeleton
            __width={`${random(4, 8)}rem`}
            borderRadius="pill"
            height="space_8"
        />
    );
}

function SkeletonFilters() {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_2"
            marginY="space_3"
        >
            <SkeletonSearch />
            <SkeletonFilterPill />
            <SkeletonFilterPill />
            <SkeletonFilterPill />
        </Box>
    );
}

function SkeletonHeaderCell() {
    return (
        <Skeleton
            __width={`${random(4, 8)}rem`}
            borderRadius="sm"
            height="space_4"
        />
    );
}

function SkeletonCell() {
    return (
        <Skeleton
            __width={`${random(4, 8)}rem`}
            borderRadius="sm"
            height="space_4"
        />
    );
}

function SkeletonCellWithAvatar() {
    return (
        <>
            <Skeleton
                borderRadius="50%"
                height="space_8"
                width="space_8"
            />
            <Skeleton
                __width={`${random(4, 12)}rem`}
                borderRadius="sm"
                height="space_4"
            />
        </>
    );
}

function SkeletonRow() {
    return (
        <>
            <SkeletonCellWithAvatar />
            <SkeletonCell />
            <SkeletonCell />
            <SkeletonCell />
        </>
    );
}

function SkeletonHeaderRow() {
    return (
        <>
            <SkeletonHeaderCell />
            <SkeletonHeaderCell />
            <SkeletonHeaderCell />
            <SkeletonHeaderCell />
        </>
    );
}

export function SkeletonTable() {
    return (
        <>
            <SkeletonFilters />
            <Box
                __gridTemplateColumns="2fr min-content min-content min-content"
                borderTop="border_rule"
                display="grid"
            >
                <SkeletonHeaderRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
            </Box>
        </>
    );
}
