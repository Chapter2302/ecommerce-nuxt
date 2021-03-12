<template>
  <div class="mix-match-container flex justify-center">
      <div class="mix-match-wrapper w-full px-8 sm:px-16 md:px-16 lg:px-16 xl:px-16 my-8" style="max-width:1024px">
          <div class="mb-8">
              <div class="font-bold text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center">MIX &amp; MATCH</div>
              <div class="font-bold text-xs sm:text-base md:text-xl lg:text-xl xl:text-xl text-center">Mặc đẹp hơn khi bạn hoàn thiện outfit này</div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                    <img class="object-fill w-full h-full" src="@/assets/imgs/product/photo1.jpg" style="max-height: 620px" alt=""/>
                </div>

                <div class="grid grid-cols-2 place-content-between gap-4 md:gap-8 lg:gap-8 xl:gap-8">
                    <div v-for="(product, index) in mixAndMaxProducts" :key="'mix-max' + index" class="text-center lg:text-left xl:text-left" style="max-height: 294px">
                        <img class="object-fill w-full m-auto lg:m-0 xl:m-0" style="max-height: 254px" :src="require(`@/assets/imgs/product/${product.imgURL}.jpg`)" alt=""/>
                        <div class="font-bold text-xs sm:text-sm md:text-base xl:text-base">Túi xách quai xanh</div>
                        <div class="font-bold text-xs sm:text-sm md:text-base xl:text-base">499,000<span class="align-top">đ</span></div>
                    </div>
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
            mixAndMaxProducts: [
                { imgURL: 'photo3' },
                { imgURL: 'photo2' },
                { imgURL: 'photo2' },
                { imgURL: 'photo3'}
            ]
        }
    }
}
</script>

<style>

</style>