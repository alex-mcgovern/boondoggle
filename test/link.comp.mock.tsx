import type { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
  id?: string;
};

export function Link({ href, children, ...rest }: LinkProps) {
  return (
    <a href={href} rel="noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
}
