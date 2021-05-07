<template>
  <div id="SubmitForm">
    <form class="flex flex-col">
      <span class="text-6xl">My name is</span>
      <input
        type="text"
        name="cat_name"
        v-model="form.catName"
        placeholder="cat name"
        class="custom-submit-form-control"
      />
      <span class="text-6xl">and I'm the </span>
      <input
        type="text"
        name="cat_trait"
        v-model="form.catTrait"
        placeholder="cat trait"
        class="custom-submit-form-control"
      />
      <span class="text-6xl">cat</span><br />
      <input
        class="button shrink center yellow pt-10"
        type="submit"
        value="Submit"
      />
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
