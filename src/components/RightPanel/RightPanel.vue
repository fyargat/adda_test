<template>
  <PanelLayout>
    <ul class="list">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :data="item"
        :update-item="updateItem(item.id)"
      />
    </ul>
  </PanelLayout>
</template>

<script setup lang="ts">
import PanelLayout from "@/layouts/PanelLayout.vue";
import { useListStore } from "@/stores/list";
import { storeToRefs } from "pinia";
import ListItem from "./ListItem.vue";

const store = useListStore();
const { list } = storeToRefs(store);
const { updateItem } = store;
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
