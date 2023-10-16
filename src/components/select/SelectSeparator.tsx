import { ElementSizeEnum } from "../../styles/common/element_size.css";
import { getSeparatorStyle } from "./SelectSeparator.css";

export const SelectSeparator = ({ size }: { size: ElementSizeEnum }) => {
	return <div className={getSeparatorStyle({ size })} />;
};
