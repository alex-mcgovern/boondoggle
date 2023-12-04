import * as React from "react";

export function useMatchMedia(
	queries: string[],
	defaultValues: boolean[] = [],
): boolean[] {
	const initialValues = defaultValues.length
		? defaultValues
		: Array(queries.length).fill(false);

	if (typeof window === "undefined") return initialValues;

	const mediaQueryLists = queries.map((q) => window.matchMedia(q));

	const getValue = () => {
		return mediaQueryLists.map((mql) => mql.matches);
	};

	const [value, setValue] = React.useState(getValue);

	React.useEffect(() => {
		const handler = () => setValue(getValue);

		for (const mql of mediaQueryLists) {
			mql.addEventListener("change", handler);
		}

		return () => {
			for (const mql of mediaQueryLists) {
				mql.removeEventListener("change", handler);
			}
		};
	}, [setValue, mediaQueryLists, getValue]);

	return value;
}
