import { Placement } from "@floating-ui/react";

import {
	PolymorphicComponentPropWithRef,
	WithStateDisabled,
	WithSlots,
	WithColorOverlay,
} from "../../src/common-types";
import { Button } from "./Button";
import { ElementSizeEnum } from "../../src/styles/common/element_size.css";

export type BaseButtonProps<TPolymorphicAs extends React.ElementType> =
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithStateDisabled &
			WithSlots & {
				/**
				 * Forces the button's active state
				 */
				active?: boolean;

				/**
				 * Controls the horizontal alignment of the button's content.
				 */
				alignment?: "center" | "left";

				/**
				 * Controls the button's variant.
				 */
				variant?: "primary" | "secondary" | "ghost";

				/**
				 * The React node shown in the button.
				 */
				children?: React.ReactNode;

				/**
				 * Whether to show a loader on first render
				 */
				isLoading?: boolean;

				/**
				 * The title for the button, shown in the UI.
				 */
				name: string;

				/**
				 * The size of the button.
				 */
				size?:
					| "square_md"
					| "square_sm"
					| "square_xs"
					| ElementSizeEnum;

				/**
				 * The tooltip to show on hover
				 */
				strTooltip?: string;

				/**
				 * The placement of the tooltip relative to the trigger.
				 */
				tooltipPlacement?: Placement;

				/**
				 * The HTML button type, defaults to `button`.
				 */
				type?: "button" | "submit" | "reset";
			} & WithColorOverlay
	>;

export type ButtonComponent = <
	TPolymorphicAs extends React.ElementType = "button",
>(
	props: BaseButtonProps<TPolymorphicAs>,
) => React.ReactElement | null;

export type ButtonProps = React.ComponentProps<typeof Button>;
