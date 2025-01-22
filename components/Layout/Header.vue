<template>
  <header class="bg-black/20 py-5">
    <div class="container flex-center-between">
      <img src="/logo.svg" alt="logo" height="64px" />

      <div class="flex-y-center gap-4">
        <nav>
          <ul class="flex-y-center gap-4">
            <li v-for="navigation in navigationLinks" :key="navigation.title">
              <NuxtLink
                :to="navigation.route"
                class="font-bold text-sm leading-[120%] text-white"
              >
                {{ $t(navigation.title) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="w-px h-5 bg-white/20" />
        <CommonLanguageSwitcher />
        <div class="w-px h-5 bg-white/20" />
        <ul class="flex-y-center gap-2">
          <li v-for="social in socials" :key="social.icon">
            <a :href="social.link" target="_blank" :class="social.icon" class="text-white/20 text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const navigationLinks = [
  {
    title: "home",
    route: { path: "/" },
  },
  {
    title: "about",
    route: { path: "/about" },
  },
  {
    title: "car_lists",
    route: { path: "/" },
  },
  {
    title: "brands",
    route: { path: "/brands" },
  },
  {
    title: "prices",
    route: { path: "/", hash: "#prices" },
  },
  {
    title: "contacts",
    route: { path: "/contacts" },
  },
];

const socials = [
  {
    icon: "icon-instagram",
    link: "https://facebook.com",
  },
  {
    icon: "icon-whatsapp",
    link: "https://instagram.com",
  },
  {
    icon: "icon-telegram",
    link: "https://twitter.com",
  },
];
</script>
