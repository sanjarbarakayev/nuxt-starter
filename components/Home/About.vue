<template>
  <section
    class="flex overflow-hidden flex-col justify-center items-center px-16 py-20 w-full bg-green-950 max-md:px-5 max-md:max-w-full"
    role="region"
    aria-label="Hero Section"
  >
    <div class="w-full max-w-[1184px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div
              class="flex flex-col text-white max-md:mr-2.5 max-md:max-w-full"
            >
              <div class="flex flex-col max-w-full w-[478px]">
                <h1
                  class="text-4xl font-extrabold leading-tight max-md:max-w-full"
                >
                  TURAN MACHINERY
                </h1>
                <div class="mt-1.5 text-sm leading-5 max-md:max-w-full">
                  Мы стремимся предложить вам самые выгодные условия! Если вы
                  найдёте идентичный продукт по более низкой цене, сообщите нам,
                  и мы предоставим вам дополнительную скидку. Покупайте уверенно
                  с нашей гарантией лучшей цены!<br /><br />Мы понимаем, что
                  цена имеет значение, поэтому предлагаем гарантию лучшей цены
                  на все наши товары. Если вы найдёте ту же продукцию дешевле,
                  мы компенсируем разницу. С нами вы всегда в выигрыше!<br />
                  <ul role="list" aria-label="Key Features">
                    <li><span class="font-bold">Гарантия</span></li>
                    <li><span class="font-bold">Лучшей цены</span></li>
                    <li><span class="font-bold">Надежность</span></li>
                    <li>
                      <span class="font-bold">Минимальные сроки поставки</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex flex-wrap gap-7 items-center mt-7 text-sm font-semibold leading-tight whitespace-nowrap max-md:max-w-full"
            >
              <button
                class="gap-2 self-stretch px-6 py-3 my-auto text-black bg-white rounded-lg min-h-[40px] min-w-[240px] w-[257px] max-md:px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Learn More"
              >
                Подробнее
              </button>
              <button
                class="flex gap-3 items-center self-stretch px-6 py-3 my-auto text-white rounded-lg border border-white border-solid bg-green-950 min-h-[40px] w-[209px] max-md:px-5 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Contact Us"
              >
                Связываться
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f142edf246a5f9080aef937407ca1b7c7b1344b02234011612591fc8e6a09d16?placeholderIfAbsent=true&apiKey=908bd9b8c3f6460ebb8e726d7a287ccb"
            alt="Turan Machinery industrial equipment showcase"
            class="object-contain grow w-full rounded-3xl aspect-[1.77] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
