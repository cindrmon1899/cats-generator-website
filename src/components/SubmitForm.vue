<template>
  <div id="SubmitForm">
    <form class="flex flex-col" @submit="onSubmit">
      <span class="text-6xl">My name is</span>
      <input
        type="text"
        name="cat_name"
        v-model="form.catName"
        placeholder="cat name"
        class="custom-submit-form-control outline-none"
        autocomplete="off"
      />
      <span class="text-6xl">and I'm the </span>
      <input
        type="text"
        name="cat_trait"
        v-model="form.catTrait"
        placeholder="cat trait"
        class="custom-submit-form-control outline-none"
        autocomplete="off"
      />
      <span class="text-6xl">cat</span><br />
      <!-- 
        TODO: Add Captcha
        <VueHCaptcha
        sitekey="569b4ff3-3485-4b44-a756-5baae1e7666f"
        theme="dark"
      /> -->
      <input
        class="button shrink center yellow pt-10"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
// import VueHCaptcha from "@hcaptcha/vue-hcaptcha";
export default {
  name: "SubmitForm",
  //   components: {
  //     VueHCaptcha,
  //   },
  data() {
    return {
      form: {
        catName: "",
        catTrait: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      //   const { data: retCatName } =
      await EventService.addCatName(this.form.catName);
      //   const { data: retCatTrait } =
      await EventService.addCatTrait(this.form.catTrait);

      //   console.log(retCatName);
      //   console.log(retCatTrait);

      this.form.catName = "";
      this.form.catTrait = "";
    },
  },
};
</script>
