<template>
  <div id="submitForm">
    <div class="custom-container center">
      <h1>Submit Here!</h1>
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
