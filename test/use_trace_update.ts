import { useEffect, useRef } from "react";

/* @ts-expect-error non-prod code */
export function useTraceUpdate(props) {
	const prev = useRef(props);
	useEffect(() => {
		const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
			if (prev.current[k] !== v) {
				/* @ts-expect-error non-prod code */
				ps[k] = [prev.current[k], v];
			}
			return ps;
		}, {});
		if (Object.keys(changedProps).length > 0) {
			console.info("Changed props:", changedProps);
		}
		prev.current = props;
	}, [props]);
}
