<template>
  <button :data="user?.id" class="border border-white rounded px-4 py-2">
    <i class="icon-map" :style="{ color: 'red' }" />
    <slot>
      <span> Button </span>
    </slot>
  </button>
</template>

<script>
const user = {};

const fetchUser = () => {};

onMounted(() => {
  fetchUser();
});
</script>
