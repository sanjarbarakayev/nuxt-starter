export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");

  if (token.value && to.name === "login") {
    return navigateTo("/");
  }

  if (!token.value && to.name !== "login") {
    return navigateTo("/login");
  }
});
