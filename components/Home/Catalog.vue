<template>
  <main role="main" aria-labelledby="catalog-title">
    <div
      class="flex flex-col self-center mt-5 w-full max-w-[1185px] max-md:max-w-full"
    >
      <div class="flex flex-col justify-center self-start max-md:max-w-full">
        <h1
          id="catalog-title"
          class="text-4xl font-extrabold leading-tight text-green-950"
        >
          Каталог спецтехники
        </h1>
        <p
          class="mt-1.5 text-sm leading-tight text-neutral-900 max-md:max-w-full"
        >
          Здесь вы найдете спецтехнику на любой случай!
        </p>
      </div>
      <div class="mt-14 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <aside class="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <nav
              class="flex flex-col grow text-sm font-bold leading-tight max-md:pt-24 max-md:mt-7"
              aria-label="Equipment Categories"
            >
              <div class="flex z-10 flex-col mt-0 w-full">
                <h2
                  class="self-stretch px-4 py-5 w-full text-lg text-center text-white whitespace-nowrap bg-red-600 rounded-md min-h-[64px]"
                >
                  Cпецтехники
                </h2>
                <ul class="flex flex-col mt-3 w-full leading-5 text-black">
                  <li>
                    <button
                      class="flex items-center px-3 py-1 w-full leading-tight text-center bg-gray-200 rounded-md min-h-[39px]"
                      aria-current="false"
                    >
                      <span
                        class="flex gap-3.5 items-center self-stretch my-auto"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4dc362e30cfbe60700099b95a7cda9f22b5ec3ea40e42df8190942cb0ceee6?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]"
                        />
                        <span class="self-stretch my-auto">Установки ГНБ</span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      class="flex items-center px-3 py-2 mt-3 w-full text-white whitespace-nowrap rounded-md bg-green-950 min-h-[53px]"
                      aria-current="true"
                    >
                      <span
                        class="flex gap-3.5 items-center self-stretch my-auto"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5197be12cb2dd5ee59d08e92f9dde5bafd3b96b6687b0c1ca756f7485531ae4?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
                          alt=""
                          class="object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]"
                        />
                        <span class="my-auto w-[158px]">
                          Магистральные<br />траншеекопатели
                        </span>
                      </span>
                    </button>
                  </li>
                  <!-- Rest of list items follow same pattern -->
                </ul>
                <button
                  class="flex gap-2 justify-center items-center px-6 py-2 mt-3 w-full font-semibold text-white rounded-lg bg-green-950 max-md:px-5"
                  aria-label="View all equipment"
                >
                  <span class="self-stretch my-auto">Все спецтехники</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d2e244c224e54bea05e80e9b663af7f15eb6d51d75d4b0def70f05b188ce1b?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
                    alt=""
                    class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </button>
              </div>
            </nav>
          </aside>
          <section
            class="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full"
            aria-label="Equipment listings"
          >
            <div class="flex flex-col w-full max-md:mt-7 max-md:max-w-full">
              <div class="flex flex-wrap gap-5 items-start">
                <article
                  v-for="(item, index) in equipmentItems"
                  :key="index"
                  class="flex overflow-hidden flex-col grow shrink px-3 pb-3 rounded-2xl min-w-[240px] w-[222px]"
                  :class="{ 'bg-green-950': item.highlighted }"
                >
                  <div
                    class="flex shrink-0 rounded-xl bg-zinc-100 h-[189px]"
                    role="img"
                    :aria-label="item.name"
                  ></div>
                  <div class="flex flex-col mt-5 max-md:mr-1.5">
                    <div class="flex flex-col w-full">
                      <div
                        class="text-sm font-medium leading-snug"
                        :class="
                          item.highlighted ? 'text-stone-300' : 'text-black'
                        "
                      >
                        iD: {{ item.id }}
                      </div>
                      <h3
                        class="mt-1 text-base font-extrabold leading-5"
                        :class="
                          item.highlighted ? 'text-white' : 'text-green-950'
                        "
                      >
                        {{ item.name }}
                      </h3>
                    </div>
                    <div
                      class="text-sm leading-snug capitalize"
                      :class="
                        item.highlighted ? 'text-stone-300' : 'text-neutral-900'
                      "
                    >
                      Brand: {{ item.brand }}
                    </div>
                  </div>
                </article>
              </div>
              <button
                class="flex justify-center items-center px-3 py-2 mt-4 w-full text-lg font-bold leading-tight text-center bg-gray-200 rounded-md border border-solid border-stone-300 min-h-[39px] text-neutral-950 max-md:mr-1.5 max-md:max-w-full"
                aria-label="Load more equipment"
              >
                Показать ешё
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
interface EquipmentItem {
  id: string;
  name: string;
  brand: string;
  highlighted?: boolean;
  image?: string;
  discount?: number;
}
const equipmentItems: EquipmentItem[] = [
  {
    id: "190.143",
    name: "Измельчители cрубленных ветвей",
    brand: "VERMEER",
    highlighted: false,
  },
  {
    id: "174.9456",
    name: "Погрузчик XCMG LW300KN",
    brand: "VERMEER",
    highlighted: true,
    discount: 15,
  },
  // Additional items would be added here
];
</script>
