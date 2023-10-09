import { buttonGroupStyles } from "./styles.css";

export function ButtonGroup({ children }: { children: React.ReactNode }) {
    return <div className={buttonGroupStyles}>{children}</div>;
}
