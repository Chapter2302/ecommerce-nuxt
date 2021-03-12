<template>
  <div class="crumb-container w-full flex justify-center">
    <div class="crumb-wrapper w-full flex text-base font-bold px-8 lg:px-16 xl:px-16 pt-28 lg:pt-5 xl:pt-5 pb-0 lg:pb-5 xl:pb-5" style="max-width:1024px;"> 
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
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
/* background-color: rgba(239, 246, 255, 50); */
</style>