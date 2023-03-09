import { blueDark } from "@radix-ui/colors";
import { makeColorScale } from ".";

test("Makes individual palette correctly", () => {
  expect(makeColorScale(blueDark)).toStrictEqual({
    background: {
      base: "hsl(216, 50.0%, 11.8%)",
      raised: "hsl(214, 59.4%, 15.3%)",
    },
    border: {
      interactive: "hsl(211, 89.7%, 34.1%)",
      interactiveActive: "hsl(206, 100%, 50.0%)",
      nonInteractive: "hsl(211, 85.1%, 27.4%)",
    },
    primary: {
      active: "hsl(210, 100%, 66.1%)",
      base: "hsl(209, 100%, 60.6%)",
    },
    secondary: {
      active: "hsl(213, 71.2%, 20.2%)",
      base: "hsl(214, 65.8%, 17.9%)",
      selected: "hsl(212, 77.4%, 23.1%)",
    },
    text: {
      highContrast: undefined,
      lowContrast: "hsl(206, 98.0%, 95.8%)",
    },
  });
});
