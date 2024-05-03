import CONFIG from "@/config";

export default defineI18nLocale(
  async () =>
    await $fetch(
      `${CONFIG.BASE_URL}common/api/v1/FrontendTranslation/uz/?source=qr_menu`
    )
);
