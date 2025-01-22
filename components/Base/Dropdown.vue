<template>
  <div class="relative select-none cursor-pointer" @focusout="handleFocusOut">
    <div :class="headClass" @click.stop="toggleShow">
      <slot name="head"></slot>
    </div>
    <Transition name="dropdown" mode="out-in">
      <div
        v-show="showBody"
        class="absolute right-0 w-max min-w-full translate-y-full bg-white rounded overflow-hidden -bottom-1 z-30 shadow-[0_6px_40px_0_rgba(18,28,37,0.20)]"
        :class="[bodyClass, { 'bottom-full translate-y-[-2%]': above }]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"

import { TClassName } from "@/types/common"

interface Props {
  headClass?: TClassName
  bodyClass?: TClassName
  show?: boolean | undefined
  above?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: undefined,
  headClass: "",
  bodyClass: "",
})

interface Emits {
  (e: "toggle", v: boolean): void
}
const emit = defineEmits<Emits>()

const showBody = ref(props.show ?? false)

function toggleShow() {
  if (props.show === undefined) {
    showBody.value = !showBody.value
  } else {
    emit("toggle", !props.show)
  }
}

function handleFocusOut() {
  showBody.value = false
  emit("toggle", false)
}

watch(
  () => props.show,
  (v) => {
    showBody.value = v
  }
)
</script>

<style scoped>
@keyframes dropdown {
  0% {
    opacity: 0;
    bottom: -12px;
  }
  100% {
    opacity: 1;
    bottom: -4px;
  }
}

.dropdown-enter-active {
  animation: dropdown 0.3s ease-in-out;
}

.dropdown-leave-active {
  animation: dropdown 0.3s ease-in-out reverse;
}
</style>
