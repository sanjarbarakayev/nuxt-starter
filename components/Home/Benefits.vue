<template>
  <section
      class="flex flex-wrap gap-2.5 items-center mr-2 max-md:max-w-full"
      role="region"
      aria-label="Company Benefits"
  >
    <article
        v-for="(benefit, index) in benefits"
        :key="index"
        :class="[
        'flex overflow-hidden flex-col self-stretch p-5 my-auto rounded-xl shadow-[0px_6px_21px_rgba(0,0,0,0.08)] w-[225px]',
        benefit.darkTheme ? 'bg-green-950' : 'bg-white'
      ]"
        tabindex="0"
    >
      <img
          loading="lazy"
          :src="benefit.iconSrc"
          :alt="benefit.imageAlt"
          class="object-contain w-12 aspect-square rounded-[37px]"
      />
      <div class="flex flex-col mt-5">
        <h3
            :class="[
            'text-base font-extrabold leading-tight',
            benefit.darkTheme ? 'text-white' : 'text-neutral-900'
          ]"
        >
          {{ benefit.title }}
        </h3>
        <p
            :class="[
            'mt-3 text-sm font-medium leading-4',
            benefit.darkTheme ? 'text-white text-opacity-60' : 'text-zinc-500'
          ]"
        >
          {{ benefit.description }}
        </p>
      </div>
      <img
          v-if="benefit.decorativeIcon"
          loading="lazy"
          :src="benefit.decorativeIcon"
          alt=""
          class="object-contain z-10 self-end mt-0 aspect-square w-[21px] max-md:mr-2.5"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
interface Benefit {
  iconSrc: string
  imageAlt: string
  title: string
  description: string
  darkTheme?: boolean
  decorativeIcon?: string
}

const benefits: Benefit[] = [
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1aaec05e69481e8a37967dda2a06f7978e785d0d5ae9c96fd74d5a45042379e?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb',
    imageAlt: 'Price guarantee icon',
    title: 'Гарантия лучшей цены',
    description: 'Мы понимаем, что цена имеет значение, поэтому предлагаем гарантию лучшей цены на все наши товары.'
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6a5390315874466fe6bdb8f1247972ca07e7b9e4f31d782d0200cb363b85d718?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb',
    imageAlt: 'Service quality icon',
    title: 'Сервис',
    description: 'Мы стремимся предоставить не только качественные товары, но и отличное обслуживание.',
    darkTheme: true,
    decorativeIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49dcea5abcf6d826dd938990cba94d0227e169e28ace1c03499e12685a583ac5?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb'
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ceb64ca5797209cb50a9322d1a81b93fadb43265377ea2e1a94e5dd4fd514f70?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb',
    imageAlt: 'Reliability icon',
    title: 'Надежность',
    description: 'Мы обеспечиваем надежность всех наших услуг и продуктов. Ваша уверенность в качестве — наш главный приоритет.'
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b23bfcab283c86ccf05610ac3f89aba5da1438e04c5a99c83ea7569be7649bdb?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb',
    imageAlt: 'Reliability icon',
    title: 'Надежность',
    description: 'Мы обеспечиваем надежность всех наших услуг и продуктов. Ваша уверенность в качестве — наш главный приоритет.'
  },
  {
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71a91df809f453acf936be281b59c496caa2fd95230c7086b6b9144ce9e7dd0d?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb',
    imageAlt: 'Reliability icon',
    title: 'Надежность',
    description: 'Мы обеспечиваем надежность всех наших услуг и продуктов. Ваша уверенность в качестве — наш главный приоритет.'
  }
]
</script>
