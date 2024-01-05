import clsx from "clsx";
import * as React from "react";
import {
	Link as RACLink,
	LinkProps as RACLinkProps,
} from "react-aria-components";
import { textLinkCSS } from "./styles.css";

export type TextLinkProps = RACLinkProps;

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Link.html)
 */

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
	(
		props,
		ref,
	) => {
		return (
			<RACLink
				{...props}
				ref={ref}
				className={clsx(
					props.className,
					textLinkCSS,
				)}
			/>
		);
	},
);
