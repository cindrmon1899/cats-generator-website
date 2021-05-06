<template>
  <div id="nav">
    <router-link class="nav-link" :to="{ name: 'Home' }">Generate</router-link>
    |
    <router-link class="nav-link" :to="{ name: 'Submit' }"
      >Submit Your Own</router-link
    >
    |
    <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
