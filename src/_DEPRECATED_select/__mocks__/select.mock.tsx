import { faGlobe } from "@fortawesome/pro-solid-svg-icons/faGlobe";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import type { BoxProps } from "../../box";
import type { GroupedSelectItems, SelectItemShape } from "../types";

type MockSelectItemsArgs = {
	/**
	 * The element type to render the select items as
	 */
	as?: BoxProps["as"];

	/**
	 * Whether the items are disabled
	 */
	disabled?: boolean;

	/**
	 * Whether to include tags in the select items
	 */
	withTags?: boolean;

	/**
	 * Whether to render the select items as buttons
	 */
	onClick?: () => void;

	/**
	 * Whether to include an icon in the select items
	 */
	withIcon?: boolean;
};

type CountryValue =
	| "uk"
	| "fr"
	| "de"
	| "es"
	| "gb"
	| "it"
	| "pt"
	| "us"
	| "ca"
	| "au";

export const mockSelectItems = ({
	as,
	disabled,
	onClick,
	withTags,
	withIcon,
}: MockSelectItemsArgs): Array<SelectItemShape<CountryValue>> => {
	return [
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "United Kingdom",
			onClick,
			tags: withTags ? ["UK", "GB", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "uk",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "France",
			tags: withTags ? ["France", "Europe", "EU"] : undefined,
			onClick,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "fr",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Germany",
			onClick,
			tags: withTags ? ["Germany", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "de",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Spain",
			onClick,
			tags: withTags ? ["Spain", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "es",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "The United Kingdom of Great Britain and Northern Ireland",
			onClick,
			tags: withTags ? ["UK", "GB", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "gb",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Italy",
			onClick,
			tags: withTags ? ["Italy", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "it",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Portugal",
			onClick,
			tags: withTags ? ["Portugal", "Europe", "EU"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "pt",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "United States",
			onClick,
			tags: withTags
				? ["United States", "North America", "NA"]
				: undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "us",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Canada",
			onClick,
			tags: withTags ? ["Canada", "North America", "NA"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "ca",
		},
		{
			as,
			description: LOREM.text_xxs,
			disabled,
			label: "Australia",
			onClick,
			tags: withTags ? ["Australia", "APAC"] : undefined,
			slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
			value: "au",
		},
	];
};

type ActionValue = "view_details" | "edit" | "delete";

export const mockSelectItemsActions = (): Array<
	SelectItemShape<ActionValue>
> => {
	return [
		{
			as: "button",
			description: LOREM.text_xxs,
			label: "View details",
			onClick: () => {
				return alert("clicked");
			},
			value: "view_details",
		},
		{
			as: "button",
			description: LOREM.text_xxs,
			label: "Edit",
			onClick: () => {
				return alert("clicked");
			},
			value: "edit",
		},
		{
			as: "button",
			colorOverlay: "red",
			description: LOREM.text_xxs,
			label: "Delete",
			onClick: () => {
				return alert("clicked");
			},
			value: "delete",
		},
	];
};

export const mockSelectItemsGrouped = ({
	as,
	disabled,
	onClick,
	withIcon,
}: MockSelectItemsArgs): GroupedSelectItems<CountryValue> => {
	return [
		{
			items: [
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "United Kingdom",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "uk",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "France",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "fr",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Germany",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "de",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Spain",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "es",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "The United Kingdom of Great Britain and Northern Ireland",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "gb",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Italy",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "it",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Portugal",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "pt",
				},
			],
			title: "Europe",
		},
		{
			items: [
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "United States",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "us",
				},
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Canada",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "ca",
				},
			],
			title: "North America",
		},
		{
			items: [
				{
					as,
					description: LOREM.text_xxs,
					disabled,
					label: "Australia",
					onClick,
					slotLeft: withIcon ? [<Icon icon={faGlobe} />] : undefined,
					value: "au",
				},
			],
			title: "APAC",
		},
	];
};
