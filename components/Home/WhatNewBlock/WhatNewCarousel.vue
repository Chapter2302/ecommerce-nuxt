<template>
    <div class="what-new-carousel w-full">
        <carousel :perPageCustom="[[480, 2], [1024, 4]]">
        <slide>
            <img class="carousel-image pr-1 xl:pr-2 xl:pr-0 w-full" src="@/assets/imgs/product/photo3.jpg"/>
            <div class="px-8 block xl:hidden text-center font-bold text-sm md:text-md xl:text-xl">
                <div class="pt-2 xl:pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-4 xl:pt-6">480.000 đ</div>
            </div>
        </slide>
        <slide>
            <img class="carousel-image pl-1 xl:pl-4 w-full" src="@/assets/imgs/product/photo9.jpg"/>
            <div class="px-8 block xl:hidden text-center font-bold text-sm md:text-md xl:text-xl">
                <div class="pt-2 xl:pt-4">Đầm xanh dài tay thắt lưng</div>
                <div class="pt-4 xl:pt-6">480.000 đ</div>
            </div>
        </slide>
        <slide>
            <img class="carousel-image pl-0 xl:pl-4 pr-1 xl:pr-0 w-full" src="@/assets/imgs/product/photo10.jpg"/>
            <div class="px-8 block xl:hidden text-center font-bold text-sm md:text-md xl:text-xl">
            <div class="pt-2 xl:pt-4">Đầm xanh dài tay thắt lưng</div>
            <div class="pt-4 xl:pt-6">480.000 đ</div>
            </div>
        </slide>
        <slide>
            <img class="carousel-image pl-1 xl:pl-4 w-full" src="@/assets/imgs/product/photo5.jpg"/>
            <div class="px-8 block xl:hidden text-center font-bold text-sm md:text-md xl:text-xl">
            <div class="pt-2 xl:pt-4">Đầm xanh dài tay thắt lưng</div>
            <div class="pt-4 xl:pt-6">480.000 đ</div>
            </div>
        </slide>
        </carousel>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';
.carousel-image {
  height: 100%;
}
</style>