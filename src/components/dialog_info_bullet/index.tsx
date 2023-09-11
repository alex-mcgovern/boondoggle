import { Children } from "react";

import { Box } from "../box";

import type { WithSlots } from "../../common-types";

export type DialogInfoBulletProps = WithSlots & {
    /**
     * The body text shown in the bullet
     */
    text?: string;

    /**
     * The title show in the bullet
     */
    title?: string;
};

/**
 * Renders a "bullet" item — comprising of an Icon and a title & body text.
 */
export function DialogInfoBullet({ slotLeft, slotRight, text, title }: DialogInfoBulletProps) {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_4"
            marginBottom="space_4"
        >
            {slotLeft && (
                <Box
                    flexShrink="0"
                    width="space_4"
                >
                    {Children.map(slotLeft, (child) => {return child})}
                </Box>
            )}
            <Box>
                <Box fontWeight="semibold">{title}</Box>
                <Box>{text}</Box>
            </Box>
            {slotRight && (
                <Box
                    flexShrink="0"
                    width="space_4"
                >
                    {Children.map(slotRight, (child) => {return child})}
                </Box>
            )}
        </Box>
    );
}
