import { WithSize } from "../types";
import { InputAddonTab } from "./InputAddonTab";
import { addonChildrenStyle, getAddonWrapperStyle } from "./styles.css";

export type WithOptionalInputAddons = {
	/**
	 * Addon to be rendered on the left side of the field.
	 */
	addonLeft?: React.ReactNode;
	/**
	 * Addon to be rendered on the right side of the field.
	 */
	addonRight?: React.ReactNode;
};

/**
 * Wraps the children with optional addons, left & right.
 */
export function InputAddonWrapper({
	addonLeft,
	addonRight,
	children,
	size,
}: WithOptionalInputAddons &
	WithSize & {
		/**
		 * The children to be rendered inside the wrapper.
		 */
		children: React.ReactNode;
	}) {
	return (
		<div
			className={getAddonWrapperStyle({
				hasAddonLeft: !!addonLeft,
				hasAddonRight: !!addonRight,
			})}
		>
			{addonLeft && (
				<InputAddonTab side="left" size={size}>
					{addonLeft}
				</InputAddonTab>
			)}

			<div className={addonChildrenStyle}>{children}</div>

			{addonRight && (
				<InputAddonTab side="right" size={size}>
					{addonRight}
				</InputAddonTab>
			)}
		</div>
	);
}
