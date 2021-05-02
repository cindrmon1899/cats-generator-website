<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  background-attachment: fixed;
  background-color: #781dff;
  background-image: radial-gradient(#781dff, black);
  background-size: 100% auto;
}
</style>
