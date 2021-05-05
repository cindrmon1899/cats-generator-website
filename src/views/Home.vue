<template>
  <div class="home">
    <div class="height-screen align-middle text-center py-52">
      <span>My name is</span><br />
      <span class="text-cyan">{{ catName }}</span
      ><br />
      <span>and I am the</span><br />
      <span class="text-cyan">{{ catTrait }}</span
      ><br />
      <span>cat</span><br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  font-family: cooper-black-std, serif;
  color: white;
  font-size: 5rem;
}
</style>
