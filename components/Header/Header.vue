<template>
  <header>
      <HeaderTop/>
      <HeaderMain v-if="!(this.$route.path == '/')" />
  </header>
</template>

<script>
// components
import HeaderTop from "./HeaderTop.vue";
import HeaderMain from "./HeaderMain.vue";

export default {
  components: {
    HeaderTop,
    HeaderMain
  }
}
</script>

<style>

</style>