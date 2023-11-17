/**
 * @jest-environment jsdom
 */
import { faShapes } from "@fortawesome/pro-solid-svg-icons";
import { render } from "@testing-library/react";

import { DialogModalAlert } from ".";
import { LOREM } from "../../../../../mocks/LOREM.mock";
import { Icon } from "../../../icon";

import type { DialogModalAlertProps } from ".";

const renderComponent = ({ ...props }: DialogModalAlertProps) => {
	return render(<DialogModalAlert {...props} />);
};

const PROPS: DialogModalAlertProps = {
	description: LOREM.text_xxs,
	slotLeft: (
		<div>
			<Icon icon={faShapes} />
		</div>
	),
	slotRight: (
		<div>
			<Icon icon={faShapes} />
		</div>
	),
	title: LOREM.title_xl,
};

describe("<DialogModalAlert />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { container } = renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});
});