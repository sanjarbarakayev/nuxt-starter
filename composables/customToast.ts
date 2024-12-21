import { useToast } from "vue-toastification";

export const useCustomToast = () => {
  const toast = useToast();
  const { t } = useI18n();

  const success = (
    message: string,
    param?: { [p: string]: string | undefined }
  ) => {
    return toast.success(
      t(message ?? "", { [param?.key ?? ""]: param?.value })
    );
  };

  const error = (
    message: string,
    param?: { [p: string]: string | undefined }
  ) => {
    return toast.error(t(message ?? "", { [param?.key ?? ""]: param?.value }));
  };

  return { success, error };
};
