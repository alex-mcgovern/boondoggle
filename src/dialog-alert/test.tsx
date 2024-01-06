/**
 * @jest-environment jsdom
 */
import type { ComponentProps } from "react";

import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import { render } from "@testing-library/react";

import { V2DialogAlert } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Icon } from "../icon";

const renderComponent = ({
    ...props
}: ComponentProps<typeof V2DialogAlert>) => {
    return render(<V2DialogAlert {...props} />);
};

const PROPS: ComponentProps<typeof V2DialogAlert> = {
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

describe("<V2DialogAlert />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { container } = renderComponent(PROPS);

            expect(container).not.toBeNull();
        });
    });
});
