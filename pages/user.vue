<template>
  <section>
    <h1>User wrapper page!</h1>

    <NuxtLink to="/user">User</NuxtLink>
    <NuxtLink to="/user/awards">Awards</NuxtLink>
    <NuxtLink to="/user/sanjar">Sanjar</NuxtLink>

    <NuxtPage />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["profile"],
});
</script>
