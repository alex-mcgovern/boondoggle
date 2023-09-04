/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { TextArea } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { TextAreaProps } from "..";

const PROPS: TextAreaProps = {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
    return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
    test("should render placeholder", () => {
        const { getByRole } = renderComponent(PROPS);

        const textbox = getByRole("textbox");

        expect((textbox as HTMLTextAreaElement).placeholder).toBe(PROPS.placeholder);
    });
});
