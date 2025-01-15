<template>
  <section
    class="flex flex-wrap gap-10 justify-between items-center pb-5 mt-48 mb-48 w-full max-w-[1181px] max-md:mt-10 max-md:max-w-full"
    aria-labelledby="news-section-title"
  >
    <div
      class="flex flex-col self-stretch my-auto min-w-[240px] w-[582px] max-md:max-w-full"
    >
      <h2
        id="news-section-title"
        class="text-4xl font-extrabold leading-tight text-green-950 max-md:max-w-full"
      >
        Новости и статьи
      </h2>
      <p class="mt-2 text-sm leading-5 text-neutral-900 max-md:max-w-full">
        Будьте в курсе событий, опережайте события: Ваш источник своевременных
        обновлений и глубокого анализа.
      </p>
    </div>

    <div
      class="flex flex-wrap gap-6 items-start text-sm font-bold leading-5 text-white"
      role="list"
    >
      <NewsCard
        v-for="(article, index) in articles"
        :key="`top-${index}`"
        :article="article"
      />
    </div>

    <div
      class="flex flex-wrap gap-6 items-start mt-11 text-sm font-bold leading-5 text-white max-md:mt-10"
      role="list"
    >
      <NewsCard
        v-for="(article, index) in articles"
        :key="`bottom-${index}`"
        :article="article"
      />
    </div>

    <button
      class="flex gap-2 justify-center items-center self-stretch px-6 py-2 my-auto text-sm font-semibold leading-tight text-white rounded-lg bg-green-950 max-md:px-5"
      @click="viewAllNews"
    >
      <span class="self-stretch my-auto">Все новости</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/440a125454131e8a5e476a79141f09755874073d6653bd4fa366c8f6f817ebcf?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
        alt=""
        class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  </section>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: "Узбекистан и Китай создадут инновационный агротехнологический парк",
    imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/199bc2c05dc91c8fd2213ed5a6451eee0b23f529f731cd723ec26eb8231286c8?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb",
  },
  {
    id: 2,
    title: "Стенд Узбекистана представят на международной сельхозвыставке",
    imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/19cb377c082f60081c5e4e81ad1f7ca7c276d59f61c4175bfe80048729f05e88?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb",
  },
  {
    id: 3,
    title:
        "Производство умной мини-техники запустят в Узбекистане совместно с малайзийской компанией",
    imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b8296cffe6ed4804dfe8dc0bf9b134f801e513af9c3c8733d64bd1eef4a1ec?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb",
  },
  {
    id: 4,
    title: "Международный совет по зерну и ЕЭК проведут совместное...",
    imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7485afbff05e82770d7fb09c1a7b8fdb3edb835d90c26cac43a7405c04762220?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb",
  },
];

const viewAllNews = () => {
  // Handle view all news click
};
</script>
