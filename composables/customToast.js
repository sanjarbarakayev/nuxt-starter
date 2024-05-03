import CustomToast from "~/components/Common/Toast.vue";
import { useToast } from "vue-toastification";

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = (text, type = "success") => {
    toast[type]({
      component: CustomToast,
      props: {
        text,
      },
    });
  };

  return { showToast };
};
