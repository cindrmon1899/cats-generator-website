<template>
  <div id="home" class="flex h-screen">
    <div
      v-if="selectedCatName !== undefined && selectedCatTrait !== undefined"
      class="m-auto align-middle text-center py-52"
    >
      <span>My name is</span><br />
      <span class="text-cyan">{{ selectedCatName }}</span
      ><br />
      <span>and I am the</span><br />
      <span class="text-cyan">{{ selectedCatTrait }}</span
      ><br />
      <span>cat</span><br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      catNames: [],
      catTraits: [],
    };
  },
  computed: {
    selectedCatName() {
      let randomValue = Math.floor(Math.random() * this.catNames.length);
      return this.catNames[randomValue];
    },
    selectedCatTrait() {
      let randomValue = Math.floor(Math.random() * this.catTraits.length);
      return this.catTraits[randomValue];
    },
  },
  async created() {
    const { data: catNames } = await this.$supabase
      .from("cat_names")
      .select("name");
    const { data: catTraits } = await this.$supabase
      .from("cat_traits")
      .select("name");

    this.catNames = catNames.map((item) => item.name);
    this.catTraits = catTraits.map((item) => item.name);
  },
};
</script>

<style lang="scss" scoped>
#home {
  font-family: cooper-black-std, serif;
  color: white;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
}
</style>
