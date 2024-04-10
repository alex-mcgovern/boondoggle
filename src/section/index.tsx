import type { SectionProps as ReactAriaSectionProps } from "react-aria-components";

import { Section as ReactAriaSection } from "react-aria-components";

import { menuSectionCSS } from "../_css/menu.css";

/**
 * A <Section> defines the child items for a section within a <ListBox>.
 * It may also contain an optional <Header> element.
 * If there is no header, then an aria-label must be provided to identify the section to assistive technologies.
 */
export function Section<TItem extends object = object>(
    props: ReactAriaSectionProps<TItem>,
) {
    return (
        <ReactAriaSection
            className={menuSectionCSS}
            {...props}
        />
    );
}
