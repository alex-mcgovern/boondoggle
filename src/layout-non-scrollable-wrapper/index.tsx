import { layoutNonScrollableWrapperCSS } from "./styles.css";

export const LayoutNonScrollableWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <div className={layoutNonScrollableWrapperCSS}>{children}</div>;
};
