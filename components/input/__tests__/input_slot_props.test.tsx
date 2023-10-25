/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/pro-solid-svg-icons"; import { render } from "@testing-library/react"; import { Input } from ".."; import "../../../../test/mocked_dependencies/dialog.mock"; import type { InputProps } from ".."; import { LOREM } from "../../../mocks/LOREM.mock"; import { Icon } from "../../icon";
const PROPS: InputProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(<Input {...props} />);
};

describe("<Input />", () => {
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
