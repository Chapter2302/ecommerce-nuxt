<template>
  <div class="home-page-container">
    <!--Large Image-->
    <div class="home-large-image-container pt-16 md:pt-20 lg:pt-10 xl:pt-10 flex justify-center">
      <div class="w-full" style="max-width: 1280px; max-height: 650px">
        <img class="object-fill w-full h-full" src="@/assets/imgs/product/large.png" alt=""/>
      </div>
    </div>
    <!--Large Image-->

    <!--gallery-block-1-->
    <div class="gallery-block-1-container w-full flex justify-center pt-5 lg:pt-10 xl:pt-10">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-16 xl:gap-10 px-8 md:px-16 lg:px-16 xl:px-16 my-8"  style="max-width: 1280px;">
        <div>
          <div class="w-full font-bold text-center text-sm md:text-base lg:text-3xl xl:text-3xl pb-2">NEW ARRIVALS</div>
          <img class="object-fill w-full" src="@/assets/imgs/product/photo2.jpg" alt="" style="max-height: 500px"/>
        </div>
        <div>
          <div class="w-full font-bold text-center text-sm md:text-base lg:text-3xl xl:text-3xl pb-2">TRENDING NOW</div>
          <img class="object-fill w-full" src="@/assets/imgs/product/photo3.jpg" alt="" style="max-height: 500px"/>
        </div>
      </div>
    </div>
    <!--gallery-block-1-->

    <HomeBlock class="mt-8"/>

    <!--style story block-->
    <div class="style-story-container w-full">
      <div class="w-full font-bold text-center text-sm md:text-base lg:text-3xl xl:text-3xl py-10">STYLE STORY</div>
      <div class="flex justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-1 px-8 md:px-16 lg:px-16 xl:px-16" style="max-width: 1280px">
          <div class="col-span-1">
            <img class="object-fill w-full h-full" src="@/assets/imgs/product/photo6.jpg" alt="" style="max-height: 500px"/>
          </div>
          <div class="col-span-1 row-span-1 grid grid-rows-2 gap-1">
            <img class="object-fill w-full" src="@/assets/imgs/product/photo4.jpg" alt="" style="max-height: 248px"/>
            <img class="object-fill w-full" src="@/assets/imgs/product/photo5.jpg" alt="" style="max-height: 248px"/>
          </div>
        </div>
      </div>
    </div>
    <!--style story block-->

    <div class="button-container w-full flex justify-center">
      <div class="w-full flex justify-center content-center py-10" style="max-width: 1280px">
        <NuxtLink to="/detail" class="p-2 bg-yellow-400 rounded h-10 font-bold">Go to Detail page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBlock from "@/components/BlockContent/HomeBlock.vue"
export default {
  components: {
    HomeBlock
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>