<template>
  <div class="home-page-container">
    <!-- Freeship banner block -->
    <div 
      class="
        hidden xl:block
        text-center font-bold text-lg 
        py-3 
        bg-red-100
      "
    >
      Free ship cho đơn hàng khi đặt tại Website
    </div>
    <!-- Freeship banner block -->

    <!-- Header Block -->
    <Header />
    <!-- Header Block -->

    <!-- Freeship banner block -->
    <div 
      class="
        block xl:hidden
        text-center font-bold text-sm 
        py-3 pt-20 flex justify-center
        bg-red-100
      "
    >
      <div class="w-3/6">Free ship cho đơn hàng khi đặt tại Website</div>
    </div>
    <!-- Freeship banner block -->

    <!--Banner-->
    <div class="home-banner-container w-full flex justify-center">
      <!-- desktop banner -->
      <div 
        class="
          home-banner-desktop w-full
          hidden xl:block
          bg-home-banner-image bg-no-repeat bg-cover
        " 
        :style="{
          'height': '420px',
          'max-width': '1024px',
          'background-position-y': '-500px',
          'background-image': `url(${require('@/assets/imgs/product/photo2.jpg')})`
        }"
      ></div>
      <!-- desktop banner -->

      <!-- mobile banner -->
      <div class="home-banner-mobile w-full block xl:hidden">
        <div
          class="
            py-2 w-full
            text-center font-bold text-white text-xl
            bg-yellow-500
          "
        >NEW ARRIVALS SPRING</div>
        <img 
          src="@/assets/imgs/product/photo2.jpg"
          class="w-full"
        />
        <div
          class="
            py-8 w-full text-center
            bg-yellow-500
          "
        >
          <button 
            class="
              mx-auto py-0.5 px-16
              bg-yellow-500 
              text-sm sm:text-md font-bold text-white 
              border-2 boder-white
            "
          >XEM THÊM</button>
        </div>
      </div>
      <!-- mobile banner -->
    </div>
    <!--Banner-->

    <!-- What's new Block -->
    <div class="w-full flex justify-center">
      <div class="w-full" style="max-width: 1024px">
        <div 
          class=
            "what-new-title 
            pt-16 xl:pt-8 pb-5
            flex flex-col xl:flex-row"
          >
          <div>
            <img src="@/assets/imgs/product/photo7.jpg"/>
          </div>
          <div 
            class="
              text-center 
              my-auto
            "
          >
            <div class="w-full pt-4 px-4">
              <div 
                class=
                  "font-bold  
                  text-2xl sm:text-3xl md:text-3xl xl:text-3xl"
              >WHAT'S NEW</div>
              <div>Không cần quá cầu kỳ, lấp lánh, nàng vẫn vô cùng nổi bật trong sắc xanh tươi từ BST mới nhất đến từ CAMS</div>
              <div class="font-bold pt-4">XEM THÊM</div>
            </div>
          </div>
        </div>
        <div class="what-new-content w-full">
          <carousel :perPageCustom="[[480, 2], [1024, 4]]">
            <slide class="pr-1">
              <img class="h-56 md:h-auto xl:h-72" src="@/assets/imgs/product/photo2.jpg"/>
              <div class="px-8 block xl:hidden text-center font-bold text-sm">
                <div class="pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-6">480.000 đ</div>
              </div>
            </slide>
            <slide class="pl-1 pr-0 xl:pr-1">
              <img class="h-56 md:h-auto xl:h-72" src="@/assets/imgs/product/photo3.jpg"/>
              <div class="px-8 block xl:hidden text-center font-bold text-sm">
                <div class="pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-6">480.000 đ</div>
              </div>
            </slide>
            <slide class="pl-0 xl:pl-1 pr-1">
              <img class="h-56 md:h-auto xl:h-72" src="@/assets/imgs/product/photo2.jpg"/>
              <div class="px-8 block xl:hidden text-center font-bold text-sm">
                <div class="pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-6">480.000 đ</div>
              </div>
            </slide>
            <slide class="xl:box-content pl-1">
              <img class="h-56 md:h-auto xl:h-72" src="@/assets/imgs/product/photo3.jpg"/>
              <div class="px-8 block xl:hidden text-center font-bold text-sm">
                <div class="pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-6">480.000 đ</div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <!-- What's new Block -->

    <HomeBlock class="mt-16"/>

    <!--style story block-->
    <div class="style-story-container w-full">
      <div class="w-full font-bold text-center text-sm md:text-base lg:text-3xl xl:text-3xl py-10">STYLE STORY</div>
      <div class="w-full flex justify-center">
        <div 
          class=
            "grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-8 
            w-full px-8 xl:px-8
            text-center font-bold"
            style="max-width: 1024px"
          >
          <div class="flex xl:flex-wrap xl:content-between">
            <div class="xs:flex-1 md:flex-1 pr-2 xl:pr-0">
              <img class="w-full object-scale-down" src="@/assets/imgs/product/photo6.jpg">
              <div class="pt-2">Thời trang mùa hè</div>
            </div>
            <div class="xs:flex-1 md:flex-1 pl-2 xl:pl-0">
              <img class="w-full object-scale-down" src="@/assets/imgs/product/photo6.jpg">
              <div class="pt-2">Thời trang mùa hè</div>
            </div>
          </div>
          <div>
            <div>
              <img class="w-full style-story-main-image" src="@/assets/imgs/product/photo1.jpg">
              <div class="pt-2">Thời trang mùa hè</div>
            </div>
          </div>
          <div class="flex xl:flex-wrap xl:content-between">
            <div class="xs:flex-1 md:flex-1 pr-2 xl:pr-0">
              <img class="w-full object-scale-down" src="@/assets/imgs/product/photo6.jpg">
              <div class="pt-2">Thời trang mùa hè</div>
            </div>
            <div class="xs:flex-1 md:flex-1 pl-2 xl:pl-0">
              <img class="w-full object-scale-down" src="@/assets/imgs/product/photo6.jpg">
              <div class="pt-2">Thời trang mùa hè</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="style-story-container w-full">
      <div class="w-full font-bold text-center text-sm md:text-base lg:text-3xl xl:text-3xl py-10">STYLE STORY</div>
      <div class="flex justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-1 px-8 md:px-16 lg:px-16 xl:px-16" style="max-width: 1024px">
          <div class="col-span-1">
            <img class="object-fill w-full h-full" src="@/assets/imgs/product/photo6.jpg" alt="" style="max-height: 500px"/>
          </div>
          <div class="col-span-1 row-span-1 grid grid-rows-2 gap-1">
            <img class="object-fill w-full" src="@/assets/imgs/product/photo4.jpg" alt="" style="max-height: 248px"/>
            <img class="object-fill w-full" src="@/assets/imgs/product/photo5.jpg" alt="" style="max-height: 248px"/>
          </div>
        </div>
      </div>
    </div> -->
    <!--style story block-->

    <div class="button-container w-full flex justify-center">
      <div class="w-full flex justify-center content-center py-10" style="max-width: 1024px">
        <NuxtLink to="/detail" class="p-2 bg-yellow-400 rounded h-10 font-bold">Go to Detail page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import HomeBlock from "@/components/BlockContent/HomeBlock.vue"
export default {
  components: {
    Header,
    HomeBlock
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
@import '@/assets/css/global.scss';
.style-story-main-image {
  height: 400px;
  @include respond(desktop) { 
    height: 500px;
  }
}
</style>