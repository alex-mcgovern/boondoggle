import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

import "./styles.css";
import type { CSSProperties, MouseEvent, ReactElement, ReactNode } from "react";

declare module "sonner" {
	type ToastTypes =
		| "normal"
		| "action"
		| "success"
		| "info"
		| "warning"
		| "error"
		| "loading"
		| "default";
	// biome-ignore lint/suspicious/noExplicitAny: copy-pasted from node_modules/sonner/dist/index.d.ts
	type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);
	// biome-ignore lint/suspicious/noExplicitAny: copy-pasted from node_modules/sonner/dist/index.d.ts
	type PromiseTResult<Data = any> =
		| string
		| ReactNode
		| ((data: Data) => ReactNode | string | Promise<ReactNode | string>);
	type PromiseExternalToast = Omit<ExternalToast, "description">;
	// biome-ignore lint/suspicious/noExplicitAny: copy-pasted from node_modules/sonner/dist/index.d.ts
	type PromiseData<ToastData = any> = PromiseExternalToast & {
		loading?: string | ReactNode;
		success?: PromiseTResult<ToastData>;
		error?: PromiseTResult;
		description?: PromiseTResult;
		finally?: () => void | Promise<void>;
	};
	interface ToastClassnames {
		toast?: string;
		title?: string;
		description?: string;
		loader?: string;
		closeButton?: string;
		cancelButton?: string;
		actionButton?: string;
		success?: string;
		error?: string;
		info?: string;
		warning?: string;
		loading?: string;
		default?: string;
		content?: string;
		icon?: string;
	}
	interface ToastIcons {
		success?: ReactNode;
		info?: ReactNode;
		warning?: ReactNode;
		error?: ReactNode;
		loading?: ReactNode;
	}
	interface Action {
		label: ReactNode;
		onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
		actionButtonStyle?: CSSProperties;
	}
	interface ToastT {
		id: number | string;
		title?: string | ReactNode;
		type?: ToastTypes;
		icon?: ReactNode;
		jsx?: ReactNode;
		richColors?: boolean;
		invert?: boolean;
		closeButton?: boolean;
		dismissible?: boolean;
		description?: ReactNode;
		duration?: number;
		delete?: boolean;
		important?: boolean;
		// @ts-expect-error
		action?: Action | ReactNode;
		// @ts-expect-error
		cancel?: Action | ReactNode;
		onDismiss?: (toast: ToastT) => void;
		onAutoClose?: (toast: ToastT) => void;
		promise?: PromiseT;
		cancelButtonStyle?: CSSProperties;
		actionButtonStyle?: CSSProperties;
		style?: CSSProperties;
		unstyled?: boolean;
		className?: string;
		classNames?: ToastClassnames;
		descriptionClassName?: string;
		position?: Position;
	}
	type Position =
		| "top-left"
		| "top-right"
		| "bottom-left"
		| "bottom-right"
		| "top-center"
		| "bottom-center";
	interface ToastOptions {
		className?: string;
		closeButton?: boolean;
		descriptionClassName?: string;
		style?: CSSProperties;
		cancelButtonStyle?: CSSProperties;
		actionButtonStyle?: CSSProperties;
		duration?: number;
		unstyled?: boolean;
		classNames?: ToastClassnames;
	}
	type CnFunction = (...classes: Array<string | undefined>) => string;
	interface ToasterProps {
		invert?: boolean;
		theme?: "light" | "dark" | "system";
		position?: Position;
		hotkey?: string[];
		richColors?: boolean;
		expand?: boolean;
		duration?: number;
		gap?: number;
		visibleToasts?: number;
		closeButton?: boolean;
		toastOptions?: ToastOptions;
		className?: string;
		style?: CSSProperties;
		offset?: string | number;
		dir?: "rtl" | "ltr" | "auto";
		/**
		 * @deprecated Please use the `icons` prop instead:
		 * ```jsx
		 * <Toaster
		 *   icons={{ loading: <LoadingIcon /> }}
		 * />
		 * ```
		 */
		loadingIcon?: ReactNode;
		icons?: ToastIcons;
		containerAriaLabel?: string;
		pauseWhenPageIsHidden?: boolean;
		cn?: CnFunction;
	}
	interface ToastToDismiss {
		id: number | string;
		dismiss: boolean;
	}
	type ExternalToast = Omit<
		ToastT,
		"id" | "type" | "title" | "jsx" | "delete" | "promise"
	> & {
		id?: number | string;
	};

	const toast: ((
		message: string | ReactNode,
		data?: ExternalToast,
	) => string | number) & {
		success: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
		info: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
		warning: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
		error: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
		custom: (
			jsx: (id: number | string) => ReactElement,
			data?: ExternalToast,
		) => string | number;
		message: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
		promise: <ToastData>(
			promise: PromiseT<ToastData>,
			data?: PromiseData<ToastData>,
		) => string | number;
		dismiss: (id?: number | string) => string | number;
		loading: (
			message: string | ReactNode,
			data?: ExternalToast,
		) => string | number;
	} & {
		getHistory: () => (ToastT | ToastToDismiss)[];
	};

	function useSonner(): {
		toasts: ToastT[];
	};
	// biome-ignore lint/correctness/noUndeclaredVariables: copy-pasted from node_modules/sonner/dist/index.d.ts
	const Toaster: (props: ToasterProps) => JSX.Element;
}

/**
 * A function that creates a toast notification using the
 * [Sonner](https://sonner.emilkowal.ski/) library.
 *
 * @example
 * toast("This is a toast");
 * toast.error("This is an error toast");
 * toast.success("This is a success toast");
 */
export const toast = sonnerToast;

/**
 * A toaster component that uses the [Sonner](https://sonner.emilkowal.ski/) library.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 *
 * ## Usage
 *
 * Render the toaster in the root of your app.
 *
 * ```tsx
 * import { Toaster } from "boondoggle";
 *
 * function App() {
 *     return (
 *         <div>
 *             <Toaster />
 *             <button onClick={() => toast("My first toast")}>
 *                 Give me a toast
 *             </button>
 *         </div>
 *     );
 * }
 * ```
 *
 * Then you can use the `toast` function to create toast notifications.
 *
 * ```ts
 * toast("This is a toast");
 * toast.error("This is an error toast");
 * toast.success("This is a success toast");
 * ```
 *
 */
export function Toaster() {
	return (
		<SonnerToaster
			className="toast"
			closeButton
			position="bottom-center"
			toastOptions={{
				classNames: {
					closeButton: "toast-close-button",
					description: "toast-description",
					title: "toast-title",
					toast: "toast-body",
				},
				unstyled: true,
				duration: 60_000,
			}}
		/>
	);
}
