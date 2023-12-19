import { CheckboxStatus } from "@/constants/checkbox";
import {
  ItemIdType,
  ItemUpdatePropsKeys,
  ItemUpdatePropsValues,
  ListIdType,
  ListType,
} from "@/types/list.types";
import { getListCheckboxStatusByItemsStatuses } from "@/utils/checkbox";
import { generateData } from "@/utils/data";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useListStore = defineStore("list", () => {
  const data = reactive(generateData());
  const list = computed(() => Array.from(data, ([_, value]) => ({ ...value })));

  const updateList =
    (listId: ListIdType) => (checkboxStatus: CheckboxStatus) => {
      const list = data.get(listId) as ListType;

      list.checkboxStatus = checkboxStatus;

      for (const item of list.items) {
        item.checkboxStatus = checkboxStatus;
      }

      data.set(listId, list);
    };

  const updateItem =
    (listId: ListIdType) =>
    (
      itemId: ItemIdType,
      prop: ItemUpdatePropsKeys,
      value: ItemUpdatePropsValues
    ) => {
      const list = data.get(listId) as ListType;

      if (!list) return;

      for (const item of list.items) {
        if (item.id !== itemId) continue;
        (item as Record<typeof prop, typeof value>)[prop] = value;
      }

      list.checkboxStatus = getListCheckboxStatusByItemsStatuses(
        list.items.map((v) => v.checkboxStatus)
      );

      data.set(listId, list);
    };

  return { list, updateItem, updateList };
});
