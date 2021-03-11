<template>
  <div
    id="app"
    class="font-sans text-white"
    v-bind:class="{ 'bg-gray-900': !currentNameRouteIsLogin }"
  >
    <Header v-if="!currentNameRouteIsLogin" />
    <router-view />
    <Footer v-if="!currentNameRouteIsLogin" />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    currentNameRouteIsLogin() {
      return this.$route.name === "login";
    }
  }
};
</script>
