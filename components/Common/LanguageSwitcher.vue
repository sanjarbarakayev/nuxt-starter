<template>
  <BaseDropdown
    :show="showDropdown"
    :head-class="[
      'flex-y-center gap-2 transition-200 text-white hover:opacity-60 font-semibold',
    ]"
    body-class="bg-white right-1/2 translate-x-1/2"
    @toggle="handleDropdownToggle"
  >
    <template #head>
      <span class="text-xs text-white leading-[120%]">
        {{ currentLanguage?.name }}
      </span>
    </template>

    <ul class="w-full">
      <li
        v-for="(language, i) in languages"
        :key="i"
        class="transition-200 base font-bold text-black px-3 py-1 hover:bg-gray/10"
        @click="changeLocale(language.code)"
      >
        {{ language.name }}
      </li>
    </ul>
  </BaseDropdown>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const languages = [
  {
    name: "Rus",
    code: "ru",
  },
  {
    name: "En",
    code: "en",
  },
];

const { locale, setLocale } = useI18n();

const showDropdown = ref(false);

const currentLanguage = computed(() =>
  languages.find((lang) => lang.code === locale.value)
);

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val;
}

function changeLocale(_locale: string) {
  locale.value = _locale;
  setLocale(_locale);
  showDropdown.value = false;
}
</script>
