<template>
  <div class="crumb-container w-full flex justify-center">
    <div class="crumb-wrapper w-full flex text-sm md:text-md xl:text-xl font-bold px-8 md:px-16 xl:px-20 pt-20 xl:pt-5 pb-0 lg:pb-5 xl:pb-5"> 
      <div v-for="(item, index) in content" :index="index" :key="'crumb-' + item">
        /<NuxtLink to="" :key="'nuxt-link-' + index" class="hover:text-yellow-400">{{item}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    content: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.crumb-wrapper {
  max-width: 1536px;
}
</style>