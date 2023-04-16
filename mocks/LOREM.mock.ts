export const LOREM = {
  button: "Do the thing",
  id: (suffix?: string) => {
    return `lorem-ipsum${suffix ? `-${suffix}` : ""}`;
  },
  label: (suffix?: string) => {
    return `Label lorem ipsum${suffix ? `-${suffix}` : ""}`;
  },
  link: "Go to the thing",
  select: "Select a thing",
  textMd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  textXxl:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
  textXxs: "Lorem ipsum",
  titleXl:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
};
