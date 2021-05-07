<template>
  <div id="home" class="font-serif text-6xl md:text-mega-boi">
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
