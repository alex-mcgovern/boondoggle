import { __assign } from "tslib";
import { cloneElement } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
export var renderTestComponent = function (Component) {
    var user = userEvent.setup();
    var props = Component.props;
    var propertiesWithTestId = __assign(__assign({}, props), { "data-testid": "tested-component" });
    var result = render(cloneElement(Component, propertiesWithTestId));
    var component = screen.queryByTestId("tested-component");
    return __assign(__assign({}, result), { user: user, component: component && component });
};
