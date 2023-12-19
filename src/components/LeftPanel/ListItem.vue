<template>
  <li class="container">
    <header class="header">
      <button
        :class="{
          'button--visible': isVisibleNestedList,
        }"
        class="button"
        @click="isVisibleNestedList = !isVisibleNestedList"
      >
        <img :src="arrowSvg" alt="arrow" />
      </button>
      <label class="label">
        <CustomCheckbox
          :initial-status="data.checkboxStatus"
          :update="handleCheckedUpdate"
        />
        <h3 class="title">{{ data.name }}</h3>
      </label>
    </header>
    <NestedList
      :data="data.items"
      v-if="isVisibleNestedList"
      :update-item="updateItem"
    />
  </li>
</template>

<script setup lang="ts">
import arrowSvg from "@/assets/arrow.svg"; // =>
import { CheckboxStatus } from "@/constants/checkbox";
import { ListType, UpdateItemFnType } from "@/types/list.types";
import { ref } from "vue";
import CustomCheckbox from "./CustomCheckbox.vue";
import NestedList from "./NestedList.vue";

interface Props {
  data: ListType;
  updateItem: UpdateItemFnType;
  updateList: (checkboxStatus: CheckboxStatus) => void;
}

const { updateList } = defineProps<Props>();

const isVisibleNestedList = ref<boolean>(false);

const handleCheckedUpdate = (checkboxStatus: CheckboxStatus) => {
  updateList(checkboxStatus);
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.125rem;
  transition: transform 0.1s ease;
}

.button--visible {
  transform: rotate(90deg);
}

.label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.title {
  font-size: 1.125rem;
}
</style>
