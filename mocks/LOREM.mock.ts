export const LOREM = {
  button: "Do the thing",
  dateFormatted: `02/06/1993`,
  email: () => {
    return `john.smith@email.com`;
  },
  errorMessage: (suffix?: string) => {
    return `Error ipsum${suffix ? `-${suffix}` : ""}`;
  },
  id: (suffix?: string) => {
    return `lorem-ipsum${suffix ? `-${suffix}` : ""}`;
  },
  label: (suffix?: string) => {
    return `Label ipsum${suffix ? `-${suffix}` : ""}`;
  },
  labelDate: (suffix?: string) => {
    return `Date label${suffix ? `-${suffix}` : ""}`;
  },
  labelDescription: (suffix?: string) => {
    return `Description label${suffix ? `-${suffix}` : ""}`;
  },
  labelDropdown: (suffix?: string) => {
    return `Dropdown label${suffix ? `-${suffix}` : ""}`;
  },
  labelEmail: (suffix?: string) => {
    return `Email label${suffix ? `-${suffix}` : ""}`;
  },
  labelSlider: (suffix?: string) => {
    return `Slider label${suffix ? `-${suffix}` : ""}`;
  },
  link: "Go to the thing",
  name: (suffix?: string) => {
    return `Name ipsum${suffix ? `-${suffix}` : ""}`;
  },
  placeholder: (suffix?: string) => {
    return `Placeholder ipsum${suffix ? `-${suffix}` : ""}`;
  },
  select: "Select a thing",
  textMd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  textXxl:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
  textXxs: "Lorem ipsum",
  titleXl:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl.",
};
