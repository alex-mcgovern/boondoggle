/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { render } from "@testing-library/react";

import { TextArea } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { Icon } from "../../Icon";

import type { TextAreaProps } from "..";

/** ----------------------------------------------------------------------------- */

const PROPS: TextAreaProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
  return render(<TextArea {...props} />);
};
/** ----------------------------------------------------------------------------- */

describe("<TextArea />", () => {
  describe("Slot props", () => {
    it("should render node passed to `slotLeft`", () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotLeft: <Icon data-testid="icon" icon={faSearch} />,
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    it("should render node passed to `slotRight`", () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotRight: <Icon data-testid="icon" icon={faSearch} />,
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});
