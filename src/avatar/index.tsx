import { useState } from "react";

import { Box } from "../box";
import { avatarCSS } from "./styles.css";

/**
 * Get the initials from a given name.
 * @example
 * getInitials("Alex") // "A"
 * getInitials("Alex McGovern") // "AM"
 */
function getInitials(name?: string) {
    if (!name) {
        return "?";
    }

    const [first, last] = name.split(" ");

    if (!last) {
        return `${first[0]}`;
    }
    return `${first[0]}${last[0]}`.toUpperCase();
}

if (import.meta.vitest) {
    const { describe, expect, it } = import.meta.vitest;

    describe("getInitials", () => {
        it("single word name", () => {
            expect(getInitials("Alex")).toBe("A");
        });
        it("two word name", () => {
            expect(getInitials("Alex McGovern")).toBe("AM");
        });
        it("three word name", () => {
            expect(getInitials("Alex McGovern Smith")).toBe("AM");
        });
        it("undefined", () => {
            expect(getInitials(undefined)).toBe("?");
        });
        it("null", () => {
            // @ts-expect-error test case
            expect(getInitials(null)).toBe("?");
        });
    });
}

type AvatarProps = {
    /**
     * A pixel value for the height and width of the avatar.
     */
    size?: number;
    /**
     * Controls the shape of the avatar.
     */
    variant?: "circle" | "square";
} & (
    | {
          /**
           * The name of the person the avatar represents.
           * If the name is provided, the avatar will display the initials of the name.
           * If the name contains a space, the initials will be the first letter of the first 2 words.
           * **Note:** If no `src` is provided, a `name` must be provided.
           */
          name: string;
          /**
           * The URL of the image to display in the avatar. May be a remote URL or a data URL.
           * **Note:** If no `name` is provided, an `src` must be provided.
           */
          src?: never;
      }
    | {
          /**
           * The name of the person the avatar represents.
           * If the name is provided, the avatar will display the initials of the name.
           * If the name contains a space, the initials will be the first letter of the first 2 words.
           * **Note:** If no `src` is provided, a `name` must be provided.
           */
          name?: never;
          /**
           * The URL of the image to display in the avatar. May be a remote URL or a data URL.
           * **Note:** If no `name` is provided, an `src` must be provided.
           */
          src: string;
      }
);

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.
 */
export function Avatar({
    name,
    size = 64,
    src,
    variant = "circle",
}: AvatarProps) {
    const initials: string | undefined = getInitials(name);

    const [img_src] = useState(src);

    if (img_src) {
        return (
            <img
                alt="avatar"
                className={avatarCSS({ variant })}
                height={size}
                src={img_src}
                width={size}
            />
        );
    }

    if (!initials) {
        return (
            <Box
                __height={size}
                __width={size}
                className={avatarCSS({ variant })}
            />
        );
    }

    return (
        <Box
            __height={size}
            __width={size}
            className={avatarCSS({ variant })}
        >
            {initials}
        </Box>
    );
}
