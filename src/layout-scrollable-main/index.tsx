import clsx from "clsx";
import { scrollableMainCSS } from "./styles.css";

export const ScrollableMain = ({
	children,
	className,
	headers,
}: {
	children: React.ReactNode;
	className?: string;
	headers: 0 | 1 | 2;
}) => {
	return (
		<main className={clsx(className, scrollableMainCSS({ headers }))}>
			{children}
		</main>
	);
};
