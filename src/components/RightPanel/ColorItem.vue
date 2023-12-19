<template>
  <li class="color-item_container">
    <button
      class="color-item_button"
      :style="{ backgroundColor: color }"
      @click="() => updateItem(id, 'count', count - 1)"
    ></button>
  </li>
</template>

<script setup lang="ts">
import { ItemColorType, UpdateItemFnType } from "@/types/list.types";

interface Props {
  id: number;
  color: ItemColorType;
  count: number;
  updateItem: UpdateItemFnType;
}

defineProps<Props>();
</script>

<style scoped>
.color-item_container {
  width: 0.75rem;
  height: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-item_button {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
