import type { ReactNode } from "react";

import { RouterProvider } from "react-aria-components";

/**
 * ClientSideRouterProvider is a re-export of the RouterProvider component from
 * react-aria-components. It is used to provide client side routing capabilities
 * to your application.
 *
 * The RouterProvider component accepts a single prop: navigate. This should
 * be set to a function received from your router for performing a client side
 * navigation programmatically.
 *
 * > [React Aria Docs](https://react-spectrum.adobe.com/react-aria/routing.html#client-side-routing)
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
