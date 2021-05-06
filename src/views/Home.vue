<template>
  <div id="home">
    <div
      v-if="selectedCatName !== undefined && selectedCatTrait !== undefined"
      class="custom-container center"
    >
      <span>My name is</span><br />
      <span class="text-cyan">{{ selectedCatName }}</span
      ><br />
      <span>and I am the</span><br />
      <span class="text-cyan">{{ selectedCatTrait }}</span
      ><br />
      <span>cat</span><br />
      <button @click="regenerate()" class="button yellow">Regenerate</button>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
// @ is an alias to /src

export default {
  name: "Home",
  metaInfo: {
    title: "Generate",
  },
  data() {
    return {
      catNames: [],
      catNameValue: 0,
      catTraits: [],
      catTraitValue: 0,
    };
  },
  methods: {
    regenerate() {
      this.catNameValue = Math.floor(Math.random() * this.catNames.length);
      this.catTraitValue = Math.floor(Math.random() * this.catTraits.length);
    },
  },
  computed: {
    selectedCatName() {
      return this.catNames[this.catNameValue];
    },
    selectedCatTrait() {
      return this.catTraits[this.catTraitValue];
    },
  },
  async created() {
    const { data: catNames } = await EventService.fetchCatNames();
    const { data: catTraits } = await EventService.fetchCatTraits();

    this.catNames = catNames.map((item) => item.name);
    this.catTraits = catTraits.map((item) => item.name);
  },
};
</script>

<style lang="scss" scoped>
#home {
  font-family: cooper-black-std, serif;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
}
</style>
