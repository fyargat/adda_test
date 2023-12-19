<template>
  <div class="app_wrap">
    <div class="app_container">
      <LeftPanel />
      <RightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";
</script>

<style scoped>
.app_wrap {
  max-width: 1060px;
  margin: 0 auto;
  padding-inline: 1rem;
}

.app_container {
  min-height: 100vh;
  padding-block: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
</style>
