/* eslint-disable import/no-extraneous-dependencies */
import { amber, blue, green, red, slate } from "@radix-ui/colors";
import fs from "fs";

import { makeTheme } from "../src/styles/utils/make_theme";

const theme = {
	amber: makeTheme({ primary: amber, secondary: amber }),
	base: makeTheme({
		primary: blue,
		secondary: slate,
	}),
	blue: makeTheme({ primary: blue, secondary: blue }),
	green: makeTheme({ primary: green, secondary: green }),
	red: makeTheme({ primary: red, secondary: red }),
	slate: makeTheme({ primary: slate, secondary: slate }),
};

fs.writeFileSync("./color_tokens.json", JSON.stringify(theme, null, 2));
