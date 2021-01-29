<template>
  <div class="root">
      <Header />
      <Nuxt />
      <Footer />
  </div>
</template>

<script>
//components
import Header from "../components/Header/Header.vue"
import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      script: [
        {
          src: "/js/script.js",
          crossorigin: "anonymous"
        },
        {
          src: "https://kit.fontawesome.com/a767a8054c.js",
          crossorigin: "anonymous"
        }
      ]
    }
  }
};
</script>

<style>
  .wrapper {
    font-size: 15px;
  }
</style>
