import { ElementSizeEnum } from "../index.css";
import { getSeparatorStyle } from "./SelectSeparator.css";

export const SelectSeparator = ({ size }: { size: ElementSizeEnum }) => {
	return <div className={getSeparatorStyle({ size })} />;
};
