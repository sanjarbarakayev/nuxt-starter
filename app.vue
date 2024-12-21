<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const SITE_TITLE = "Nuxt app";
const SITE_DESCRIPTION = "Nuxt app description";
const SITE_IMAGE = "https://example.com/image.jpg";

useSeoMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: "home, page",
  ogTitle: SITE_TITLE,
  ogDescription: SITE_DESCRIPTION,
  ogUrl: "https://example.com",
  ogType: "website",
  ogImage: SITE_IMAGE,
  twitterTitle: SITE_TITLE,
  twitterDescription: SITE_DESCRIPTION,
  twitterCard: "summary_large_image",
  twitterImage: SITE_IMAGE,
  twitterSite: "@example",
  twitterCreator: "@example",
});
</script>
