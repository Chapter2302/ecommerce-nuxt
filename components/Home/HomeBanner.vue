<template>
    <div class="home-banner-container w-full flex justify-center">
        <!-- desktop banner -->
        <div class="w-full hidden xl:block">
            <img class="home-banner-desktop-img w-full" :src="require('@/assets/imgs/product/photo11.jpg')"/>
        </div>
        <!-- desktop banner -->

        <!-- mobile banner -->
        <div class="home-banner-mobile-wrapper w-full block xl:hidden">
            <div
                class="py-2 w-full
                text-center font-bold text-white text-xl
                bg-yellow-500"
            >NEW ARRIVALS SPRING</div>
            <img 
                src="@/assets/imgs/product/photo11.jpg"
                class="w-full"
            />
            <div
                class="py-8 w-full text-center
                bg-yellow-500"
            >
            <button 
                class="mx-auto py-1 px-16 md:px-24
                bg-yellow-500 
                text-sm sm:text-md font-bold text-white 
                border-2 boder-white"
            >XEM THÊM</button>
            </div>
        </div>
        <!-- mobile banner -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';

.home-banner-desktop-img {
    height: 740px;
    object-fit: cover; 
    object-position: 50% 35%;

    @include respond(large-desktop) {
        height: 840px;
    }
}
</style>