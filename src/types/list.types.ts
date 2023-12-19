import { CheckboxStatus } from "@/constants/checkbox";
import { Color } from "@/constants/color";

export type ListIdType = number;
export type ItemIdType = number;
export type ItemColorType = Color | string;

export type ListType = {
  id: ListIdType;
  name: string;
  items: ItemType[];
  checkboxStatus: CheckboxStatus;
};

export type ItemType = {
  id: ItemIdType;
  name: string;
  count: number;
  color: ItemColorType;
  checkboxStatus: CheckboxStatus;
};

export type ItemUpdatePropsType = Pick<
  ItemType,
  "count" | "color" | "checkboxStatus"
>;
export type ItemUpdatePropsKeys = keyof ItemUpdatePropsType;
export type ItemUpdatePropsValues =
  ItemUpdatePropsType[keyof ItemUpdatePropsType];

export type UpdateItemFnType = (
  itemId: ItemIdType,
  prop: ItemUpdatePropsKeys,
  value: ItemUpdatePropsValues
) => void;
