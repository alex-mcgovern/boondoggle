import type { ReactNode } from "react";

import { RouterProvider as AriaRouterProvider } from "react-aria-components";

/**
 * RouterProvider is a re-export of the RouterProvider component from
 * react-aria-components. It is used to provide client side routing capabilities
 * to your application.
 * [React Aria Docs](https://react-spectrum.adobe.com/react-aria/routing.html#client-side-routing)
 *
 * The RouterProvider component accepts a single prop: navigate. This should
 * be set to a function received from your router for performing a client side
 * navigation programmatically.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { RouterProvider } from "boondoggle/router-provider"
 * ```
 */
export function RouterProvider({
    children,
    navigate,
}: {
    children: ReactNode;
    navigate: (path: string) => void;
}) {
    return (
        <AriaRouterProvider navigate={navigate}>{children}</AriaRouterProvider>
    );
}
