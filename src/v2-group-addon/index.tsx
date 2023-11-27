import { groupAddonCSS } from "./styles.css";
import { WithSize } from "../types";

export const GroupAddon = ({
	children,
	"data-slot-side": dataSlotSide,
	size,
}: React.HTMLAttributes<HTMLDivElement> & {
	"data-slot-side": "right" | "left";
} & WithSize) => {
	return (
		<div data-slot-side={dataSlotSide} className={groupAddonCSS({ size })}>
			{children}
		</div>
	);
};
