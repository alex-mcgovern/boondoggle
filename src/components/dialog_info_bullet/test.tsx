/**
 * @jest-environment jsdom
 */
import { faShapes } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";

import { DialogInfoBullet } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Icon } from "../icon";

import type { DialogInfoBulletProps } from ".";

const renderComponent = ({ ...props }: DialogInfoBulletProps) =>
    {return render(<DialogInfoBullet {...props} />)};

const PROPS: DialogInfoBulletProps = {
    slotLeft: [
        <div>
            <Icon icon={faShapes} />
        </div>,
    ],
    slotRight: [
        <div>
            <Icon icon={faShapes} />
        </div>,
    ],
    text: LOREM.text_xxs,
    title: LOREM.title_xl,
};

describe("<DialogInfoBullet />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", () => {
            const { container } = renderComponent(PROPS);

            expect(container).not.toBeNull();
        });
    });
});
