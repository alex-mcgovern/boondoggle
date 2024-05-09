import type { FormProps as RACFormProps } from "react-aria-components";

import { Form as RACForm } from "react-aria-components";

export type FormProps = RACFormProps;

/**
 * A form is a group of inputs that allows users to submit data to a server, with support for providing field validation errors.
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
 * import { Form, type FormProps } from "boondoggle/form"
 * ```
 */
export const Form = RACForm;
