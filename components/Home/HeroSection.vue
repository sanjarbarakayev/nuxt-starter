<template>
  <section
    class="min-h-screen bg-[url('/images/hero-bg.webp')] bg-cover bg-no-repeat flex-center relative after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(0deg,_#00040B_0%,rgba(0,4,11,0.00)_100%)] after:w-full after:h-[340px]"
  >
    <div class="container uppercase">
      <h2 class="font-bold text-white text-[54px]">Luxury Car Rental</h2>
      <p class="font-medium text-lg text-white max-w-[708px] mb-6">
        Opulent Rental Car is your ultimate destination for a luxurious and
        seamless driving experience
      </p>
      <BaseButton :text="$t('rent_a_car')" class="py-3.5 !px-24 text-lg" />

      <div class="absolute bottom-12 right-0 z-10">
        <div class="bg-orange w-[420px] h-px mb-4"></div>
        <p class="font-semibold text-[10px] text-white uppercase text-right pr-7">
          TOYOTA HILUX
        </p>
      </div>
    </div>
  </section>
</template>
