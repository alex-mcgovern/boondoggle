import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { sprinkles } from "../../../sprinkles/index.css";
import { Button } from "../../../v2-button";
import { Icon } from "../../../v2-icon";

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
