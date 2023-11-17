import { useMemo } from "react";
import { Box } from "../box";
import * as styles from "./styles.css";

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

export type AvatarProps = {
	/**
	 * First name of the user.
	 */
	firstName?: string;

	/**
	 * Full name of the user
	 */
	fullName?: string;

	/**
	 * Last name of the user.
	 */
	lastName?: string;

	/**
	 * Size of the avatar.
	 */
	size?: number;

	/**
	 * URL of the avatar image.
	 */
	src?: string | null;

	/**
	 * Controls the appearance of the avatar.
	 */
	appearance?: "circle" | "square";
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
	appearance = "circle",
}: AvatarProps) {
	const initials: string | undefined = useMemo(() => {
		return getInitials({ firstName, fullName, lastName });
	}, [firstName, fullName, lastName]);

	if (src) {
		return (
			<img
				alt="avatar"
				className={styles.avatar({ appearance })}
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
				className={styles.avatar({ appearance })}
			/>
		);
	}

	return (
		<Box
			__height={size}
			__width={size}
			className={styles.avatar({ appearance })}
		>
			{initials.toUpperCase()}
		</Box>
	);
}
