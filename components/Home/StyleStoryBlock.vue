<template>
    <div class="style-story-container w-full">
        <div class="w-full font-bold text-center text-2xl md:text-3xl xl:text-3xl py-10 xl:py-16">STYLE STORY</div>
        <div class="w-full flex justify-center">
            <div 
                class="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-16 
                w-full px-8 md:px-16 xl:px-16
                text-center font-bold"
                style="max-width: 1536px"
            >
                <div class="flex xl:flex-wrap xl:content-between">
                    <div class="xs:flex-1 md:flex-1 pr-2 xl:pr-0">
                        <img class="style-story-item-image w-full" src="@/assets/imgs/product/photo6.jpg">
                        <div class="pt-2">Thời trang mùa hè</div>
                    </div>
                    <div class="xs:flex-1 md:flex-1 pl-2 xl:pl-0">
                        <img class="style-story-item-image w-full" src="@/assets/imgs/product/photo6.jpg">
                        <div class="pt-2">Thời trang mùa hè</div>
                    </div>
                </div>
                <div>
                    <div class="py-6 md:py-12 xl:py-0">
                        <img class="w-full style-story-main-image" src="@/assets/imgs/product/photo7.jpg">
                        <div class="pt-2">Thời trang mùa hè</div>
                    </div>
                </div>
                <div class="flex xl:flex-wrap xl:content-between">
                    <div class="xs:flex-1 md:flex-1 pr-2 xl:pr-0">
                        <img class="style-story-item-image w-full" src="@/assets/imgs/product/photo6.jpg">
                        <div class="pt-2">Thời trang mùa hè</div>
                    </div>
                    <div class="xs:flex-1 md:flex-1 pl-2 xl:pl-0">
                        <img class="style-story-item-image w-full" src="@/assets/imgs/product/photo6.jpg">
                        <div class="pt-2">Thời trang mùa hè</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';
.style-story-main-image {
  height: 380px;

  @include respond(tablet) { 
    height: 740px;
  }

  @include respond(desktop) { 
    height: 580px;
  }

  @include respond(large-desktop) { 
    height: 640px;
  }
}

.style-story-item-image {
  height: 80px;

  @include respond(tablet) { 
    height: 200px;
  }

  @include respond(desktop) { 
    height: 240px;
  }

  @include respond(large-desktop) { 
    height: 250px;
  }
}
</style>