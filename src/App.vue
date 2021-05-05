<template>
  <div id="app" class="flex flex-col h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";
export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s | Cats Name Generator",
  },
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
a,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Segoe UI", sans-serif;
}
</style>
