import {
  LIST_NUMBER,
  MAX_ITEMS_NUMBER,
  MAX_ITEM_COUNT,
  MIN_ITEMS_NUMBER,
  MIN_ITEM_COUNT,
} from "@/constants";
import { CheckboxStatus } from "@/constants/checkbox";
import { ItemType, ListType } from "@/types/list.types";
import { getRandomColors, getRandomNumber } from "./random";

const generateItems = (): ItemType[] => {
  const itemsNumber = getRandomNumber(MIN_ITEMS_NUMBER, MAX_ITEMS_NUMBER);
  const colors = getRandomColors(itemsNumber);
  const items = Array(itemsNumber)
    .fill("_")
    .map((_, index) => {
      const num = index + 1;
      return {
        id: num,
        name: `Item ${num}`,
        count: getRandomNumber(MIN_ITEM_COUNT, MAX_ITEM_COUNT),
        checkboxStatus: CheckboxStatus.Unchecked,
        color: colors[index],
      };
    });

  return items;
};

export const generateData = (): Map<number, ListType> => {
  const listData = Array(LIST_NUMBER)
    .fill("_")
    .map((_, index) => {
      const num = index + 1;
      return {
        id: num,
        name: `List ${num}`,
        checkboxStatus: CheckboxStatus.Unchecked,
        items: generateItems(),
      };
    });

  const map = new Map(listData.map((v) => [v.id, v]));
  return map;
};
