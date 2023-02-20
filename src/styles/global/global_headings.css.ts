import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  display: "block",
  overflowWrap: `break-word`,
  lineHeight: 1.4,

  marginTop: vars.spacing.spacing2,
  marginBottom: vars.spacing.spacing2,

  // maxWidth: vars.width.gridSpan6,

  fontFamily: vars.fontFamily.display,
  fontWeight: vars.fontWeight.medium,
});

globalStyle(`h1`, {
  fontSize: vars.fontSize.h1,
});

globalStyle(`h2`, {
  fontSize: vars.fontSize.h2,
});

globalStyle(`h3`, {
  fontSize: vars.fontSize.h3,
});

globalStyle(`h4`, {
  fontSize: vars.fontSize.h4,
});

globalStyle(`h5`, {
  fontSize: vars.fontSize.h5,
});

globalStyle(`h6`, {
  fontSize: vars.fontSize.h6,
});
