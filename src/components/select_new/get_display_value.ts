interface GetDisplayValueArgs {
  originalValue: string;
  length?: number;
}

export const getDisplayValue = ({
  originalValue,
  length,
}: GetDisplayValueArgs) => {
  if (length && length > 0) return `${length} selected`;

  return originalValue;
};
