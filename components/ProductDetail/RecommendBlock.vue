<template>
  <div class="recommend-container flex justify-center">
    <div class="recommend-wrapper w-full px-8 md:px-16 xl:px-16" style="max-width:1536px">
        <div class="font-bold text-xl md:text-4xl xl:text-4xl my-4 md:my-8 xl:my-8 text-center">YOU MAY ALSO LIKE</div>
        <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            <div v-for="(imgURL, index) in recommendProductImgURLs" :index="index" :key="'recommend' + index" class="flex justify-center">
                <img class="item-image w-full" :src="require(`@/assets/imgs/product/${imgURL}.jpg`)" alt=""/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// components

export default {
    data() {
        return {
            recommendProductImgURLs: ["photo8", "photo9", "photo10", "photo3"]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';
.item-image {
    height: 160px;

    @include respond(tablet) {
        height: 300px;
    }

    @include respond(desktop) {
        height: 320px;
    }

    @include respond(large-desktop) {
        height: 350px;
    }
}
</style>