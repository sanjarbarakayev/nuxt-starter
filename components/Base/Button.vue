<template>
  <button class="transition-200 flex-center gap-2 rounded-[10px] relative font-semibold" :class="btnStyles">
    {{ text }}
    <i v-if="icon" :class="icon" class="text-2xl" />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  text?: string
  variant?: "primary" | "info" | "secondary"
  size?: "default"
  icon?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: "Button",
  variant: "primary",
  size: "default",
})

const variantStyles = {
  primary: "bg-[linear-gradient(90deg,#FF6225_0%,_#993B16_100%)] text-white",
  info: "bg-white text-black",
  secondary: "border-white text-white",
}

const sizeStyles = {
  default: "px-5 py-2.5 text-sm leading-130",
}

const btnStyles = computed(() => [
  variantStyles[props.variant],
  sizeStyles[props.size],
])
</script>
