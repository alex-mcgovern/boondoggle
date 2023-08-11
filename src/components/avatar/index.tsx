import { useMemo } from "react";

import { Box } from "../box";
import { avatarStyle } from "./styles.css";

type AvatarProps = {
  /** First name of the user. */
  firstName?: string;
  /** Last name of the user. */
  lastName?: string;
  /** Size of the avatar. */
  size?: number;
  /** URL of the avatar image. */
  src?: string | null;
};

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.
 */
export function Avatar({ firstName, lastName, size = 64, src }: AvatarProps) {
  const firstLetter = useMemo(() => {
    return firstName?.charAt(0).toUpperCase();
  }, [firstName]);

  const lastLetter = useMemo(() => {
    return lastName?.charAt(0).toUpperCase();
  }, [lastName]);

  if (src) {
    return (
      <img
        alt="avatar"
        className={avatarStyle}
        height={size}
        src={src}
        width={size}
      />
    );
  }

  if (!firstLetter || !lastLetter) {
    return <Box __height={size} __width={size} className={avatarStyle} />;
  }

  return (
    <Box __height={size} __width={size} className={avatarStyle}>
      {`${firstLetter} ${lastLetter}`}
    </Box>
  );
}
