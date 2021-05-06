<template>
  <div id="fourOhFour">
    <div class="custom-container center flex flex-col">
      <h1 class="pb-10">Whoops! There is no page here. Look somewhere else!</h1>
      <iframe
        class="mx-auto pb-10"
        width="600"
        height="380"
        src="https://www.youtube.com/embed/mW61VTLhNjQ?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <router-link
        class="text-white no-underline text-xs sm:text-base"
        :to="{ name: 'Home' }"
        >Go Back</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  metaInfo: {
    title: "404 Not Found",
  },
};
</script>

<style></style>
