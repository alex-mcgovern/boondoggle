import type { ReactNode } from "react";

type LinkProps = {
	children: ReactNode;

	href: string;

	id?: string;
};

export function Link({ children, href, ...rest }: LinkProps) {
	return (
		<a href={href} rel="noreferrer" target="_blank" {...rest}>
			{children}
		</a>
	);
}
