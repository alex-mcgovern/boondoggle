/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { render } from "@testing-library/react";
import { TextArea } from "..";
import type { TextAreaProps } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import "../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../v2-icon";

const PROPS: TextAreaProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
	return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", () => {
			const { getByTestId } = renderComponent({
				...PROPS,
				slotLeft: <Icon data-testid="icon" icon={faSearch} />,
			});

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", () => {
			const { getByTestId } = renderComponent({
				...PROPS,
				slotRight: <Icon data-testid="icon" icon={faSearch} />,
			});

			expect(getByTestId("icon")).not.toBeNull();
		});
	});
});
