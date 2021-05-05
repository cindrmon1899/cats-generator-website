<template>
  <div id="nav" class="container mx-auto text-center p-5 text-serif">
    <router-link
      class="text-white no-underline text-sans-serif"
      :to="{ name: 'Home' }"
      >Generate</router-link
    >
    |
    <router-link class="text-white no-underline" :to="{ name: 'Submit' }"
      >Submit Your Own</router-link
    >
    |
    <router-link class="text-white no-underline" :to="{ name: 'About' }"
      >About</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
