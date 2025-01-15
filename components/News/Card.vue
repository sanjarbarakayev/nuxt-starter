<template>
  <article
    class="flex overflow-hidden flex-col grow shrink whitespace-nowrap rounded-xl border border-solid border-zinc-100 min-w-[240px] w-[222px]"
    role="listitem"
  >
    <div class="flex relative flex-col w-full aspect-[1.463]">
      <img
        :src="article.imageUrl"
        :alt="article.title"
        loading="lazy"
        class="object-cover absolute inset-0 size-full"
      />
      <div class="flex relative flex-col px-4 pt-36 pb-4 max-md:pt-24">
        <h3 class="text-ellipsis">{{ article.title }}</h3>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  article: Article;
}
defineProps<Props>();
</script>
