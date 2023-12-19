<template>
  <li class="list-item_container">
    <header class="list-item_header">
      <h3 class="list-item_title">{{ data.name }}</h3>
      <button
        class="list-item_order-button"
        @click="isOrder = !isOrder"
        :disabled="!items.length"
      >
        {{ isOrder ? "Перемешать" : "Сортировать" }}
      </button>
    </header>

    <ul v-if="items.length" class="list-item_items">
      <li v-for="(item, index) in items" :key="index">
        <ul class="list-item_colors">
          <ColorItem
            v-for="([id, color, count], index) in item"
            :key="index"
            :id="id"
            :color="color"
            :count="count"
            :update-item="updateItem"
          />
        </ul>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { CheckboxStatus } from "@/constants/checkbox";
import { ItemColorType, ListType, UpdateItemFnType } from "@/types/list.types";
import { computed, ref, watch } from "vue";
import ColorItem from "./ColorItem.vue";

interface Props {
  data: ListType;
  updateItem: UpdateItemFnType;
}

const isOrder = ref<boolean>(true);

const { data } = defineProps<Props>();

const items = computed(() => {
  const colors = data.items
    .filter((v) => v.checkboxStatus === CheckboxStatus.Checked && v.count)
    .map((v) => createColorsFromCount(v.id, v.color, v.count));

  if (!colors.length) return [];

  return isOrder.value
    ? colors
    : [colors.flat().sort(() => Math.random() - 0.5)];
});

const createColorsFromCount = (
  id: number,
  color: ItemColorType,
  count: number
): [number, ItemColorType, number][] =>
  Array.from({ length: count }, (_) => [id, color, count]);

watch(
  () => items.value,
  (newValue: any[]) => {
    if (newValue.length) return;
    isOrder.value = true;
  }
);
</script>

<style scoped>
.list-item_container {
  border: 1px solid #374151;
  padding: 0.5rem;
}

.list-item_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item_title {
  font-size: 1.125rem;
}

.list-item_order-button {
  background-color: #38bdf8;
  padding: 0.5rem 0.75rem;
  border-radius: 30px;
  color: #fff;
}

.list-item_order-button:disabled {
  filter: opacity(50%);
  cursor: default;
  pointer-events: none;
}

.list-item_items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.list-item_colors {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.125rem;
}
</style>
