<template>
  <button
    @click="handleStatusSet"
    class="custom-checkbox"
    :class="{
      'custom-checkbox--checked': status === CheckboxStatus.Checked,
      'custom-checkbox--indeterminate': status === CheckboxStatus.Indeterminate,
    }"
  ></button>
</template>

<script setup lang="ts">
import { CheckboxStatus } from "@/constants/checkbox";
import { ref, watch } from "vue";

interface Props {
  initialStatus: CheckboxStatus;
  update: (status: CheckboxStatus) => void;
}

const props = defineProps<Props>();
const status = ref<CheckboxStatus>(
  props.initialStatus ?? CheckboxStatus.Unchecked
);

const handleStatusSet = () => {
  if (status.value === CheckboxStatus.Indeterminate) {
    return;
  }

  const newStatus =
    status.value === CheckboxStatus.Checked
      ? CheckboxStatus.Unchecked
      : CheckboxStatus.Checked;

  props.update(newStatus);
  status.value = newStatus;
};

watch(
  () => props.initialStatus,
  (newStatus: CheckboxStatus) => {
    status.value = newStatus;
  }
);
</script>

<style scoped>
.custom-checkbox {
  position: relative;
  border: 1px solid #374151;
  border-radius: 2px;
  margin-right: 5px;
  min-height: 18px;
  min-width: 18px;
}

.custom-checkbox--checked {
  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 8px;
    width: 4px;
    border-bottom: 2px solid #374151;
    border-right: 2px solid #374151;
  }
}

.custom-checkbox--indeterminate {
  pointer-events: none;
  cursor: default;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #374151;
  }
}
</style>
