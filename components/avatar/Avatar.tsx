import { useMemo } from "react";
import { getInitials } from "./_lib/getInitials";
import * as styles from "./Avatar.css";

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.
 */
export function Avatar({
	firstName,
	fullName,
	lastName,
	size = 64,
	src,
	variant = "circle",
}: {
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
	 * Controls the variant of the avatar.
	 */
	variant?: "circle" | "square";
}) {
	const initials: string | undefined = useMemo(() => {
		return getInitials({ firstName, fullName, lastName });
	}, [firstName, fullName, lastName]);

	if (src) {
		return (
			<img
				alt="avatar"
				className={styles.avatar({ variant })}
				height={size}
				src={src}
				width={size}
			/>
		);
	}

	if (!initials) {
		return (
			<div
				style={{
					height: size,
					width: size,
				}}
				className={styles.avatar({ variant })}
			/>
		);
	}

	return (
		<div
			style={{
				height: size,
				width: size,
			}}
			className={styles.avatar({ variant })}
		>
			{initials.toUpperCase()}
		</div>
	);
}
