import * as React from "react";
import { type WithSize } from "../../types";
import { getInputAddonTabStyle } from "./styles.css";

export function InputAddonTab({
	children,
	side,
	size,
}: WithSize & {
	children: React.ReactNode;
	side: "right" | "left";
}) {
	if (React.isValidElement(children)) {
		return (
			<div
				className={getInputAddonTabStyle({
					hasBorder: false,
					side,
					size,
				})}
			>
				{children}
			</div>
		);
	}
	return (
		<div
			className={getInputAddonTabStyle({
				hasBorder: true,
				padding: size,
				side,
				size,
			})}
		>
			{children}
		</div>
	);
}
