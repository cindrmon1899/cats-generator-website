<template>
  <div id="SubmitForm" class="font-serif">
    <form class="flex flex-col">
      <span class="text-6xl">My name is</span><br />
      <input
        type="text"
        name="cat_name"
        v-model="form.catName"
        placeholder="enter cat's name here"
        class="custom-submit-form-control"
      />
      <span class="text-6xl">and I'm the </span><br />
      <input
        type="text"
        name="cat_trait"
        v-model="form.catTrait"
        placeholder="enter cat's trait here"
        class="mb-5 custom-submit-form-control"
      />
      <span class="text-6xl">cat</span><br />
      <input class="button yellow" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      form: {
        catName: "",
        catTrait: "",
      },
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: cooper-black-std, serif;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
}
</style>
