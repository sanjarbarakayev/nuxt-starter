<template>
  <button class="border border-white rounded px-4 py-2">
    <i class="icon-map" />
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
}
defineProps<Props>();
</script>
