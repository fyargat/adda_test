<template>
  <ul class="list">
    <NestedItem
      v-for="item in data"
      :data="item"
      :key="item.id"
      :update-item="updateItem"
    />
  </ul>
</template>

<script setup lang="ts">
import { ItemType, UpdateItemFnType } from "@/types/list.types";
import NestedItem from "./NestedItem.vue";

interface Props {
  data: ItemType[];
  updateItem: UpdateItemFnType;
}

defineProps<Props>();
</script>

<style scoped>
.list {
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
