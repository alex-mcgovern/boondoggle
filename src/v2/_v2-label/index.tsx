import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { Label as RACLabel } from "react-aria-components";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../v1/tooltip";
import { Icon } from "../icon";
import { V2Label } from "../../types";

export function Label({ label, name }: { label?: V2Label; name: string }) {
	if (!label) {
		return null;
	}

	if (typeof label === "string") {
		return <RACLabel htmlFor={name}>{label}</RACLabel>;
	}

	return (
		<RACLabel {...label.props} htmlFor={name}>
			{label.text}

			{label.tooltip && (
				<Tooltip placement="right">
					<TooltipTrigger asChild>
						<button type="button">
							<Icon
								color="text_low_contrast"
								icon={faInfoCircle}
							/>
						</button>
					</TooltipTrigger>
					<TooltipContent>{label.tooltip}</TooltipContent>
				</Tooltip>
			)}
		</RACLabel>
	);
}
