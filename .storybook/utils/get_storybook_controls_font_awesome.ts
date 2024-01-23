/**
 * Util to generate Storybook controls for all
 * FontAwesome related props and group them in the UI.
 */
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons/faArrowRight";
import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons/faTriangleCircleSquare";

const availableIcons = {
    "": null,
    "Triangle circle square": faTriangleCircleSquare,
    "Arrow Right": faArrowRight,
};

export const getFontAwesomeControls = (fontAwesomePropNames: Array<string>) => {
    return fontAwesomePropNames.reduce((accumulator, iconPropName) => {
        accumulator[iconPropName] = {
            control: "select",
            options: Object.keys(availableIcons),
            mapping: availableIcons,

            table: {
                category: "FontAwesome",
            },
        };

        return accumulator;
    }, {});
};
