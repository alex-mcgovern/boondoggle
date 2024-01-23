import { useState } from "react";

import { Box } from "../box";
import { avatarCSS } from "./styles.css";

function getInitials({
    firstName,
    fullName,
    lastName,
}: {
    firstName?: string;
    fullName?: string;
    lastName?: string;
}) {
    if (fullName && !firstName && !lastName) {
        const [first, last] = fullName.split(" ");

        if (!last) {
            return `${first[0]}`;
        }
        return `${first[0]}${last[0]}`;
    }

    if (firstName && lastName) {
        return `${firstName[0]}${lastName[0]}`;
    }

    if (firstName) {
        return firstName[0];
    }

    if (lastName) {
        return lastName[0];
    }

    return "";
}

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.
 */
export function Avatar({
    appearance = "circle",
    firstName,
    fullName,
    imageSrc,
    lastName,
    size = 64,
}: {
    appearance?: "circle" | "square";
    firstName?: string;
    fullName?: string;
    imageSrc?: null | string;
    lastName?: string;
    size?: number;
}) {
    const initials: string | undefined = getInitials({
        firstName,
        fullName,
        lastName,
    });

    const [src] = useState(imageSrc);

    if (src) {
        return (
            <img
                alt="avatar"
                className={avatarCSS({ appearance })}
                height={size}
                src={src}
                width={size}
            />
        );
    }

    if (!initials) {
        return (
            <Box
                __height={size}
                __width={size}
                className={avatarCSS({ appearance })}
            />
        );
    }

    return (
        <Box
            __height={size}
            __width={size}
            className={avatarCSS({ appearance })}
        >
            {initials.toUpperCase()}
        </Box>
    );
}
