/* eslint-disable import/no-extraneous-dependencies */
import { amber, blue, green, red, slate } from "@radix-ui/colors";
import fs from "fs";

import { makeTheme } from "../src/styles/utils/make_theme";

const theme = {
  amber: makeTheme({ primaryPalette: amber, secondaryPalette: amber }),
  base: makeTheme({
    primaryPalette: blue,
    secondaryPalette: slate,
  }),
  blue: makeTheme({ primaryPalette: blue, secondaryPalette: blue }),
  green: makeTheme({ primaryPalette: green, secondaryPalette: green }),
  red: makeTheme({ primaryPalette: red, secondaryPalette: red }),
  slate: makeTheme({ primaryPalette: slate, secondaryPalette: slate }),
};

fs.writeFileSync("./color_tokens.json", JSON.stringify(theme, null, 2));
