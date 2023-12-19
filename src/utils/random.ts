import { Color } from "@/constants/color";

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomColors = (num: number): Color[] => {
  const colors = Object.values(Color);
  const shuffledColors = colors.sort(() => Math.random() - 0.5);
  return shuffledColors.slice(0, num);
};
