<template>
    <div class="what-new-container w-full flex justify-center">
      <div class="what-new-wrapper w-full">
        <div 
          class=
            "pt-20 md:pt-28 xl:pt-8 pb-8 md:pb-16 xl:pb-5
            flex flex-col xl:flex-row"
          >
          <div class="flex-1">
            <img class="w-full" src="@/assets/imgs/product/photo8.jpg"/>
          </div>
          <div class="flex-1 text-center my-auto">
            <div class="w-full pt-4 md:pt-6 xl:pt-0 px-8 xl:px-12">
              <div 
                class=
                  "font-bold  
                  text-2xl md:text-3xl xl:text-3xl"
              >WHAT'S NEW</div>
              <div class="text-sm md:text-md xl:text-xl">Không cần quá cầu kỳ, lấp lánh, nàng vẫn vô cùng nổi bật trong sắc xanh tươi từ BST mới nhất đến từ CAMS</div>
              <div class="font-bold pt-4">XEM THÊM</div>
            </div>
          </div>
        </div>
        <WhatNewCarousel class="w-full" />
      </div>
    </div>
</template>

<script>
import WhatNewCarousel from "./WhatNewCarousel.vue"
export default {
    components: {
        WhatNewCarousel
    },
    data() {
        return {
        }
    }
}
</script>

<style>
</style>