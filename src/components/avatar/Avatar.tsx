import { useMemo } from "react";
import { getInitials } from "./_getInitials";
import styles from "./avatar.module.css";
import clsx from "clsx";

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.
 */
export function Avatar({
	firstName,
	fullName,
	lastName,
	className,
	size = 64,
	src,
	appearance = "circle",
}: {
	/**
	 * Class name to be appended to the element.
	 */
	className?: string;

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
}) {
	const initials: string | undefined = useMemo(() => {
		return getInitials({ firstName, fullName, lastName });
	}, [firstName, fullName, lastName]);

	const cn = clsx(className, styles.avatar, {
		[styles.square]: appearance === "square",
		[styles.circle]: appearance === "circle",
	});

	if (src) {
		return (
			<img
				alt="avatar"
				className={cn}
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
				className={cn}
			/>
		);
	}

	return (
		<div
			style={{
				height: size,
				width: size,
			}}
			className={cn}
		>
			{initials}
		</div>
	);
}
