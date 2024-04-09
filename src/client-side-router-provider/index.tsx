import type { ReactNode } from "react";

import { RouterProvider } from "react-aria-components";

/**
 * The RouterProvider component accepts a single prop: navigate. This should
 * be set to a function received from your router for performing a client side
 * navigation programmatically.
 */
export function ClientSideRouterProvider({
    children,
    navigate,
}: {
    children: ReactNode;
    navigate: (path: string) => void;
}) {
    return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
}
