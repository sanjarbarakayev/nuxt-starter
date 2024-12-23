<template>
  <div class="bg-[#fff] text-black rounded p-4">{{ text }}</div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
defineProps<Props>();
</script>
