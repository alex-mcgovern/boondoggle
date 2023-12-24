import {
	Section as ReactAriaSection,
	SectionProps as ReactAriaSectionProps,
} from "react-aria-components";
import { menuSectionCSS } from "../_css/menu.css";

export function Section<TItem extends object = object>(
	props: ReactAriaSectionProps<TItem>,
) {
	return <ReactAriaSection className={menuSectionCSS} {...props} />;
}