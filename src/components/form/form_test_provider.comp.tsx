import { cloneElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

import type { JSXElementConstructor, ReactElement } from "react";

export function FormTestProvider({
	children,
	...rest
}: {
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) {
	const reactHookFormMethods = useForm({});

	return (
		<FormProvider {...reactHookFormMethods}>
			{cloneElement(children, {
				...rest,
			})}
		</FormProvider>
	);
}
