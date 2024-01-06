import type { ReactNode } from "react";

import { RouterProvider } from "react-aria-components";

export function ClientSideRouterProvider({
	children,
	navigate,
}: {
	children: ReactNode;
	navigate: (path: string) => void;
}) {
	return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
}
