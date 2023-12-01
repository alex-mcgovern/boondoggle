import { keyCSS } from "./styles.css";

export const Key = ({ children }: { children: React.ReactNode }) => {
	return <span className={keyCSS}>{children}</span>;
};
