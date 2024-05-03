<template>
  <div>
    <h1 class="heading">Hello Nuxt!</h1>

    <BaseButton @click="onClick">{{ $t("about_company") }}</BaseButton>

    <pre>{{ clearSpaces("+998 99 999 99 99") }}</pre>
  </div>
</template>

<script setup>
if (process.client) {
  const heading = document.querySelector(".heading");
}

const commonStore = useCommonStore();

const counter = computed(() => commonStore.counter);

const { showToast } = useCustomToast();

const onClick = () => {
  showToast("Success!", "error");
};
</script>
