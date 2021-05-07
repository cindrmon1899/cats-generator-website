<template>
  <div id="submitForm">
    <div class="custom-container center overflow-auto">
      <h1 class="text-6xl pb-5">Submit Here!</h1>
      <SubmitForm />
    </div>
  </div>
</template>

<script>
import SubmitForm from "@/components/SubmitForm";
export default {
  name: "Submit",
  components: {
    SubmitForm,
  },
  metaInfo: {
    title: "Submit Your Own",
  },
};
</script>
