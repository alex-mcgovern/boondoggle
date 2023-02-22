import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";

// import {
//   responsiveSprinklesProperties,
//   sprinklesProperties,
// } from "../src/styles/utils/get_sprinkles.css";

// /** -----------------------------------------------------------------------------
// * Util fn to get keys from sprinkle properties and hide them behind a control
// * when in Storybook. (The full list is quite long and not very useful).
// * Currently shelved as there are some naming collisions with props of some components.
// * ------------------------------------------------------------------------------- */
// const SHOW_SPRINKLES_KEY = "__storybook_showSprinkles";

// const getSprinklesKeys = (sprinkles) => {
//   return Object.keys(sprinkles.styles).reduce((accumulator, sprinkleKey) => {
//     accumulator[sprinkleKey] = {
//       control: "select",
//       if: { arg: SHOW_SPRINKLES_KEY },
//     };

//     return accumulator;
//   }, {});
// };
// console.debug("debug  getSprinklesKeys:", getSprinklesKeys);

// const sprinklesControls = getSprinklesKeys(sprinklesProperties);
// const responsiveSprinklesControls = getSprinklesKeys(
//   responsiveSprinklesProperties
// );

// export const argTypes = {
//   [SHOW_SPRINKLES_KEY]: { control: "boolean", defaultValue: false },
//   // below are only included when advanced is true
//   ...sprinklesControls,
//   ...responsiveSprinklesControls,
// };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    sort: "requiredFirst",
    expanded: false,

    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
