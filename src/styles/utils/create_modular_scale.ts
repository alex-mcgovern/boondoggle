import { modularScale } from "polished";

export const createModularScale = (ratio: number, base: number) => {
  return (steps: number) => {
    return `${modularScale(steps, base, ratio)}px`;
  };
};
