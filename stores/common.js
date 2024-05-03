export const useCommonStore = defineStore("common", () => {
  const counter = ref(0);

  return { counter };
});
