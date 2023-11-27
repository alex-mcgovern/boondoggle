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
import { Sprinkles, sprinkles } from "../sprinkles/index.css";
import {
	PolymorphicComponentPropWithRef,
	PolymorphicRef,
	WithColorOverlay,
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "../types";
import { tabCSS, tabListCSS, tabsSectionCss } from "./styles.css";

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
			slotLeft,
			slotRight,
		}: BaseTabProps<TPolymorphicAs>,
		ref?: PolymorphicRef<TPolymorphicAs>,
	) => {
		const Component = as || "button";

		return (
			<Component
				{...{
					className: tabCSS({ colorOverlay, isActive: !!active }),
					id,
					ref,
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
	justifyContent = "start",
	size,
	areTabsFullWidth,
}: WithSize & {
	tabs: Array<ComponentProps<typeof Tab>>;
	justifyContent?: "start" | "space-between";
	areTabsFullWidth?: boolean;
}) {
	return (
		<section className={tabsSectionCss({ size })}>
			<nav
				role="tablist"
				className={clsx(tabListCSS, sprinkles({ justifyContent }))}
			>
				{arrayHasLength(tabs) &&
					tabs.map((tab) => {
						return (
							<Tab
								isTabFullWidth={areTabsFullWidth}
								key={tab.name}
								{...tab}
							/>
						);
					})}
			</nav>
		</section>
	);
}
