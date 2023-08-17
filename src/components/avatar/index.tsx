import { useMemo } from "react";

import { Box } from "../box";
import { getInitials } from "./lib/get_initials";
import { avatarStyle } from "./styles.css";

export type AvatarProps = {
  /** First name of the user. */
  firstName?: string;
  /** Full name of the user */
  fullName?: string;
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
export function Avatar({
  firstName,
  fullName,
  lastName,
  size = 64,
  src,
}: AvatarProps) {
  const initials: string | undefined = useMemo(() => {
    return getInitials({ firstName, fullName, lastName });
  }, [firstName, fullName, lastName]);

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

  if (!initials) {
    return <Box __height={size} __width={size} className={avatarStyle} />;
  }

  return (
    <Box __height={size} __width={size} className={avatarStyle}>
      {initials.toUpperCase()}
    </Box>
  );
}
