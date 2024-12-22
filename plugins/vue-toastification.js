import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import CustomComponent from "~/components/Common/Toast.vue";

const options = {
  hideProgressBar: true,
  component: CustomComponent,
  // You can set your default options here
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
