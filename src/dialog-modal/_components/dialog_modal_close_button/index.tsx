import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { Button } from "../../../v2-button";
import { Icon } from "../../../icon";
import { sprinkles } from "../../../sprinkles/index.css";

export function DialogModalCloseButton({
	closeDialog,
}: {
	closeDialog: () => void;
}) {
	return (
		<Button
			appearance="ghost"
			aria-label="Close"
			className={sprinkles({
				justifySelf: "end",
			})}
			name="close"
			onPress={closeDialog}
			size="square_md"
			type="button"
		>
			<Icon icon={faTimes} />
		</Button>
	);
}
