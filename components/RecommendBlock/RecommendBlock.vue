<template>
  <div class="recommend-container flex justify-center">
    <div class="recommend-wrapper w-full px-8 md:px-16 lg:px-16 xl:px-16 my-8" style="max-width:1280px">
        <div class="font-bold text-3xl xs:text-sm mb-8 text-center">YOU MAY ALSO LIKE</div>
        <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            <div v-for="imgURL in recommendProductImgURLs" :key="'recommend' + imgURL" class="flex justify-center">
                <img class="object-fill w-full" :src="require(`@/assets/imgs/product/${imgURL}.jpg`)" alt=""/>
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
            recommendProductImgURLs: ["photo3", "photo2", "photo3", "photo2"]
        }
    }
}
</script>

<style>

</style>