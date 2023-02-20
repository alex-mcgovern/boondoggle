import { style } from "@vanilla-extract/css";

export const backgroundImage = style([
  {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    minWidth: "100%",
    width: "auto",
    overflow: "hidden",
    height: "100%",
    pointerEvents: "none",

    // width: "100%",

    // height: "100%",
    // zIndex: -1,
  },
]);
