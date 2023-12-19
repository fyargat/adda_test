<template>
  <li class="container">
    <label class="label">
      <CustomCheckbox
        :initial-status="data.checkboxStatus"
        :update="handleCheckedUpdate"
      />
      <h4>{{ data.name }}</h4>
    </label>
    <div class="inputs">
      <input
        type="number"
        min="0"
        max="99"
        class="count-input"
        v-model="countValue"
        @input="handleCountUpdate"
        @blur="handleCountBlur"
      />
      <input
        type="color"
        class="color-input"
        :value="data.color"
        @input="handleColorUpdate"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { MAX_ITEM_COUNT, MIN_ITEM_COUNT } from "@/constants";
import { CheckboxStatus } from "@/constants/checkbox";
import { ItemType, UpdateItemFnType } from "@/types/list.types";
import { ref, watch } from "vue";
import CustomCheckbox from "./CustomCheckbox.vue";

interface Props {
  data: ItemType;
  updateItem: UpdateItemFnType;
}

const { data, updateItem } = defineProps<Props>();
const countValue = ref<number>(data.count ?? 0);

const handleCountUpdate = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);

  if (value < MIN_ITEM_COUNT || value > MAX_ITEM_COUNT) {
    return;
  }

  updateItem(data.id, "count", value);
};

const handleCountBlur = () => {
  countValue.value = data.count;
};

const handleColorUpdate = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  updateItem(data.id, "color", value);
};

const handleCheckedUpdate = (status: CheckboxStatus) => {
  updateItem(data.id, "checkboxStatus", status);
};

watch(data, ({ count }: ItemType) => {
  countValue.value = count;
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  max-width: 20rem;
}
.label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.count-input {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  max-width: 2rem;
}

.color-input {
  background-color: transparent;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  cursor: pointer;
}
</style>
