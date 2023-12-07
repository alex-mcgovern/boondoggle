import { RouterProvider } from "react-aria-components";

export function ClientSideRouterProvider({
	children,
	navigate,
}: { children: React.ReactNode; navigate: (path: string) => void }) {
	return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
}
