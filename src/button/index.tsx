import { extractAtomsFromProps } from "@dessert-box/core";
import type { Placement } from "@floating-ui/react";
import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import type {
	ComponentProps,
	ElementType,
	ReactElement,
	ReactNode,
} from "react";
import { type ElementSizeEnum, variantColorOverlay } from "../index.css";
import { Loader } from "../loader";
import { SlotWrapper } from "../slot-wrapper";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import type {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
	WithColorOverlay,
	WithSlots,
	WithStateDisabled,
} from "../types";
import { getButtonStyles } from "./styles.css";

const getLoadingSlotSide = ({
	slotLeft,
	slotRight,
}: WithSlots): "right" | "left" => {
	if (slotRight) {
		return "right";
	}
	if (slotLeft) {
		return "left";
	}
	return "right";
};

type BaseButtonProps<TPolymorphicAs extends ElementType> = Sprinkles &
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
				alignment?: "left" | "center";

				/**
				 * Controls the button's appearance.
				 */
				appearance?:
					| "primary"
					| "secondary"
					| "ghost"
					| "link"
					| "navigational";

				/**
				 * The React node shown in the button.
				 */
				children?: ReactNode;

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

type ButtonComponent = <TPolymorphicAs extends ElementType = "button">(
	props: BaseButtonProps<TPolymorphicAs>,
) => ReactElement | null;

export type ButtonProps = ComponentProps<typeof Button>;

export const Button: ButtonComponent = forwardRef(
	<TPolymorphicAs extends ElementType = "span">(
		{
			active,
			alignment = "center",
			appearance = "primary",
			as,
			children,
			className: userClassName,
			colorOverlay,
			disabled,
			gap,
			isLoading,
			size = "sm",
			slotLeft,
			slotProps,
			slotRight,
			strTooltip,
			tooltipPlacement = "top",
			type = "button",
			...rest
		}: BaseButtonProps<TPolymorphicAs>,
		ref?: PolymorphicRef<TPolymorphicAs>,
	) => {
		const { atomProps, otherProps } = extractAtomsFromProps(
			rest,
			sprinkles,
		);

		const Component = as || "button";

		const loaderSide = useMemo(() => {
			return getLoadingSlotSide({ slotLeft, slotRight });
		}, [slotLeft, slotRight]);

		if (strTooltip && tooltipPlacement) {
			return (
				<Tooltip placement="top">
					<TooltipTrigger asChild>
						<Component
							{...{
								"aria-disabled": disabled,
								className: clsx(
									getButtonStyles({
										alignment,
										appearance,
										size,
									}),
									sprinkles(atomProps),
									userClassName,
									colorOverlay
										? variantColorOverlay[colorOverlay]
										: undefined,
								),
								"data-active": active,
								disabled: disabled || isLoading,
								ref,
								type,
								...otherProps,
							}}
						>
							<SlotWrapper
								gap={gap}
								color="inherit"
								slotLeft={
									isLoading && loaderSide === "left"
										? [<Loader />]
										: slotLeft
								}
								slotProps={slotProps}
								slotRight={
									isLoading && loaderSide === "right"
										? [<Loader />]
										: slotRight
								}
							>
								{children}
							</SlotWrapper>
						</Component>
					</TooltipTrigger>
					<TooltipContent>{strTooltip}</TooltipContent>
				</Tooltip>
			);
		}

		return (
			<Component
				{...{
					"aria-disabled": disabled,
					className: clsx(
						getButtonStyles({ alignment, appearance, size }),
						sprinkles(atomProps),
						userClassName,
						colorOverlay
							? variantColorOverlay[colorOverlay]
							: undefined,
					),
					"data-active": active,
					disabled: disabled || isLoading,
					ref,
					type,
					...otherProps,
				}}
			>
				<SlotWrapper
					color="inherit"
					gap={gap}
					slotLeft={
						isLoading && loaderSide === "left"
							? [<Loader />]
							: slotLeft
					}
					slotProps={slotProps}
					slotRight={
						isLoading && loaderSide === "right"
							? [<Loader />]
							: slotRight
					}
				>
					{children}
				</SlotWrapper>
			</Component>
		);
	},
);
