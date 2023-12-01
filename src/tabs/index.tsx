import clsx from "clsx";
import {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement,
	ReactNode,
	forwardRef,
} from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { SlotWrapper } from "../slot-wrapper";
import { Sprinkles } from "../sprinkles/index.css";
import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
	WithColorOverlay,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../types";
import { tabCSS, tabListCSS } from "./styles.css";

// const TabCount = ({ count }: { count: number }) => {
// 	return <div className={tabCountCSS}>{count}</div>;
// };

type BaseTabProps<TPolymorphicAs extends ElementType> = Sprinkles &
	PolymorphicComponentPropWithRef<
		TPolymorphicAs,
		WithColorOverlay &
			WithSize &
			WithSlots &
			WithStateDisabled & {
				/**
				 * The react node rendered in the tab.
				 */
				children?: ReactNode;

				/**
				 * Whether the tab section is full width
				 */
				isFullWidth?: boolean;

				/**
				 * Whether the tab is currently active
				 */
				active: boolean | undefined;

				/**
				 * Used as the html ID.
				 */
				id?: string;

				/**
				 * Callback on click.
				 */
				onClick?(...args: unknown[]): unknown;
			}
	>;

type TabComponent = <TPolymorphicAs extends ElementType = "div">(
	props: BaseTabProps<TPolymorphicAs>,
) => ReactElement | null;

export type TabProps = ComponentPropsWithoutRef<typeof Tab>;

const Tab: TabComponent = forwardRef(
	<TPolymorphicAs extends ElementType = "button">(
		{
			as,
			children,
			colorOverlay,
			active,
			id,
			isFullWidth,
			slotLeft,
			slotRight,
			...rest
		}: BaseTabProps<TPolymorphicAs>,
		ref?: PolymorphicRef<TPolymorphicAs>,
	) => {
		const Component = as || "button";

		return (
			<Component
				{...{
					className: tabCSS({
						isFullWidth: !!isFullWidth,
						colorOverlay,
						isActive: !!active,
					}),
					id,
					ref,
					...rest,
				}}
			>
				<SlotWrapper
					color="inherit"
					gap="space_1"
					size="sm"
					slotLeft={slotLeft}
					slotRight={slotRight}
				>
					{children}
				</SlotWrapper>
			</Component>
		);
	},
);

export function Tabs({
	tabs,
	isFullWidth,
	className,
}: {
	tabs: Array<ComponentProps<typeof Tab>>;
	isFullWidth?: boolean;
	className?: string;
}) {
	return (
		<nav
			role="tablist"
			className={clsx(
				className,
				tabListCSS({ isFullWidth: !!isFullWidth }),
			)}
		>
			{arrayHasLength(tabs) &&
				tabs.map((tab) => {
					return (
						<Tab
							{...tab}
							isFullWidth={isFullWidth}
							key={tab.name}
						/>
					);
				})}
		</nav>
	);
}
