import { useToast, TYPE } from "vue-toastification";
import CustomToast from "~/components/Common/Toast.vue";

export const useCustomToast = () => {
  const toast = useToast();
  const { t } = useI18n();

  const showToast = (
    type: TYPE.SUCCESS | TYPE.ERROR,
    message: string,
    param?: { [p: string]: string | undefined }
  ) => {
    return toast[type]({
      component: CustomToast,
      props: {
        text: t(message ?? "", { [param?.key ?? ""]: param?.value }),
      },
    });
  };

  const success = (
    message: string,
    param?: { [p: string]: string | undefined }
  ) => showToast(TYPE.SUCCESS, message, param);

  const error = (
    message: string,
    param?: { [p: string]: string | undefined }
  ) => showToast(TYPE.ERROR, message, param);

  return { success, error };
};
