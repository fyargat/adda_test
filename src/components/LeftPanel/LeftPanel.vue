<template>
  <PanelLayout>
    <ul class="list">
      <ListItem
        v-for="l in list"
        :data="l"
        :key="l.id"
        class="item"
        :update-item="updateItem(l.id)"
        :update-list="updateList(l.id)"
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
const { updateItem, updateList } = store;
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
