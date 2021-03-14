<template>
  <div class="home-page-container">
    <FreeshipBannerDesktop />

    <Header />

    <FreeshipBannerMobile />

    <HomeBanner />

    <WhatNewBlock />

    <ThankYouBlock class="mt-16"/>

    <StyleStoryBlock />

    <div class="button-container w-full flex justify-center">
      <div class="w-full flex justify-center content-center py-10" style="max-width: 1536px">
        <NuxtLink to="/detail" class="p-2 bg-yellow-400 rounded h-10 font-bold">Go to Detail page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import ThankYouBlock from "@/components/Home/ThankYouBlock.vue"
import FreeshipBannerMobile from "@/components/Home/FreeshipBannerMobile.vue"
import FreeshipBannerDesktop from "@/components/Home/FreeshipBannerDesktop.vue"
import HomeBanner from "@/components/Home/HomeBanner.vue"
import WhatNewBlock from "@/components/Home/WhatNewBlock/WhatNewBlock.vue"
import StyleStoryBlock from "@/components/Home/StyleStoryBlock.vue"

export default {
  components: {
    Header,
    ThankYouBlock,
    FreeshipBannerMobile,
    FreeshipBannerDesktop,
    HomeBanner,
    WhatNewBlock,
    StyleStoryBlock
  },
  data() {
    return {
      carouselSettings: {
        loop: true,
        perPageCustom: [[480, 2], [1024, 4]]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>