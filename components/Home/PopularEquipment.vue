<template>
  <section
    aria-labelledby="popular-equipment-title"
    class="flex flex-col items-start self-center mt-14 ml-3 w-full max-w-[1208px] max-md:mt-10 max-md:max-w-full"
  >
    <div
      class="flex flex-wrap gap-5 justify-between w-full max-w-[1184px] max-md:max-w-full"
    >
      <div class="flex flex-col justify-center max-md:max-w-full">
        <h1
          id="popular-equipment-title"
          class="text-4xl font-extrabold leading-tight text-green-950 max-md:max-w-full"
        >
          Популярное спецтехники
        </h1>
        <p
          class="mt-1.5 text-sm leading-tight text-neutral-900 max-md:max-w-full"
        >
          Здесь вы найдете самую популярную спецтехнику!
        </p>
      </div>
      <button
        class="flex gap-2 justify-center items-center self-start px-6 py-2 mt-5 text-sm font-semibold leading-tight bg-gray-200 rounded-lg border border-solid border-stone-300 text-zinc-800 max-md:px-5"
        aria-label="View all equipment"
      >
        <span class="self-stretch my-auto">Все спецтехники</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3a31806519d6e3149ea0a664aa8f7264296340dc9e60b3e720153f118d66ec?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
          alt=""
          class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </div>
    <div
      class="flex relative gap-5 justify-center items-center mt-10"
      role="list"
      aria-label="Popular equipment items"
    >
      <article
        role="listitem"
        class="flex overflow-hidden z-0 flex-col self-stretch p-3 my-auto rounded-xl bg-green-950 min-w-[240px] w-[278px]"
      >
        <div
          class="flex overflow-hidden flex-col text-xs font-bold leading-snug text-white whitespace-nowrap rounded-xl bg-zinc-100"
        >
          <div
            class="flex overflow-hidden flex-col items-end pt-3 pr-3 pb-36 pl-7 w-full bg-white rounded-xl max-md:pb-24 max-md:pl-5"
          >
            <span
              class="z-10 gap-1.5 self-stretch px-1 py-0.5 rounded bg-green-950 min-h-[15px] w-[25px]"
              aria-label="15 percent discount"
            >
              -15%
            </span>
            <span
              class="gap-1.5 self-stretch px-1 py-px mt-0 mb-0 rounded bg-green-950 max-md:mb-2.5"
              aria-label="15 percent discount"
            >
              -15%
            </span>
          </div>
        </div>
        <div class="flex flex-col mt-5 max-md:mr-1.5">
          <div class="flex flex-col w-full text-white">
            <p class="text-sm font-medium leading-snug">iD: 174.9456</p>
            <h2 class="mt-1 text-base font-extrabold leading-5">
              Установки направленного бурения
            </h2>
          </div>
          <p class="text-sm leading-snug text-stone-300">Brand: VERMEER</p>
        </div>
      </article>

      <article
        role="listitem"
        class="flex overflow-hidden z-0 flex-col self-stretch px-3 pt-3 pb-8 my-auto rounded-2xl min-w-[240px] w-[278px]"
      >
        <div class="flex overflow-hidden flex-col bg-white rounded-xl">
          <div
            class="flex shrink-0 rounded-xl bg-zinc-100 h-[177px]"
            role="img"
            aria-label="XCMG LW300KN Loader"
          ></div>
        </div>
        <div class="flex flex-col mt-5 max-md:mr-1.5">
          <div class="flex flex-col w-full">
            <p class="text-sm font-medium leading-snug text-white">
              iD: 235.4595
            </p>
            <h2
              class="mt-1 text-base font-extrabold leading-tight text-green-950"
            >
              Погрузчик XCMG LW300KN
            </h2>
          </div>
          <p class="text-sm leading-snug capitalize text-neutral-900">
            Brand: VERMEER
          </p>
        </div>
      </article>

      <article
        role="listitem"
        class="flex overflow-hidden z-0 flex-col self-stretch px-3 pt-3 pb-8 my-auto rounded-2xl min-w-[240px] w-[278px]"
      >
        <div
          class="flex overflow-hidden flex-col justify-center px-5 py-1.5 bg-white rounded-xl"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1986b306ee263bf2d23525c79910b2d263aab7e6c82a0837579bc7c11ea59e58?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
            alt="Траншеекопател equipment"
            class="object-contain aspect-[1.29] w-[215px]"
          />
        </div>
        <div class="flex flex-col mt-5 max-md:mr-1.5">
          <div class="flex flex-col w-full">
            <p class="text-sm font-medium leading-snug text-white">
              iD: 266.5531
            </p>
            <h2
              class="mt-1 text-base font-extrabold leading-tight text-green-950"
            >
              Траншеекопател
            </h2>
          </div>
          <p class="text-sm leading-snug capitalize text-neutral-900">
            Brand: VERMEER
          </p>
        </div>
      </article>

      <article
        role="listitem"
        class="flex overflow-hidden absolute top-0 z-0 flex-col items-center self-start p-3 rounded-2xl min-w-[240px] right-[-298px] w-[278px]"
      >
        <div
          class="flex w-full bg-white rounded-xl min-h-[177px]"
          role="img"
          aria-label="Регенератор equipment"
        ></div>
        <div class="flex flex-col self-center mt-5 max-w-full w-[243px]">
          <div class="flex flex-col w-full">
            <p class="text-sm font-medium leading-snug text-white">
              iD: 567.8766
            </p>
            <h2
              class="mt-1 text-base font-extrabold leading-tight text-green-950"
            >
              РЕГЕНЕРАТОР
            </h2>
          </div>
          <p class="text-sm leading-snug capitalize text-neutral-900">
            Brand: VERMEER
          </p>
        </div>
      </article>

      <article
        role="listitem"
        class="flex overflow-hidden absolute bottom-0 z-0 flex-col self-start pt-3 pb-8 pl-3 rounded-2xl h-[305px] right-[-437px] w-[278px]"
      >
        <div
          class="flex shrink-0 rounded-xl bg-zinc-100 h-[177px]"
          role="img"
          aria-label="XCMG LW300KN Loader"
        ></div>
        <div class="flex flex-col mt-5">
          <div class="flex flex-col w-full">
            <p class="text-sm font-medium leading-snug text-white">
              iD: 174.9456
            </p>
            <h2
              class="mt-1 text-base font-extrabold leading-tight text-green-950"
            >
              Погрузчик XCMG LW300KN
            </h2>
          </div>
          <p class="text-sm leading-snug capitalize text-neutral-900">
            Brand: VERMEER
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
