<template>
  <div class="mix-match-container flex justify-center">
      <div class="mix-match-wrapper w-full px-8 md:px-16 xl:px-16 my-8" style="max-width:1536px">
          <div class="mb-8">
              <div class="font-bold text-xl md:text-4xl xl:text-4xl text-center">MIX &amp; MATCH</div>
              <div class="font-bold text-sm md:text-xl xl:text-xl text-center">Mặc đẹp hơn khi bạn hoàn thiện outfit này</div>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                    <img class="large-image w-full" src="@/assets/imgs/product/photo1.jpg" alt=""/>
                </div>

                <div class="grid grid-cols-2 place-content-between gap-4 md:gap-8 lg:gap-8 xl:gap-8">
                    <div v-for="(product, index) in mixAndMaxProducts" :key="'mix-max' + index" class="text-center lg:text-left xl:text-left">
                        <img class="item-image w-full m-auto xl:m-0 mb-2" :src="require(`@/assets/imgs/product/${product.imgURL}.jpg`)" alt=""/>
                        <div class="font-bold text-sm md:text-md xl:text-xl">Túi xách quai xanh</div>
                        <div class="font-bold text-sm md:text-md xl:text-xl">499,000<span class="align-top">đ</span></div>
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
                { imgURL: 'photo8' },
                { imgURL: 'photo9' },
                { imgURL: 'photo10' },
                { imgURL: 'photo3'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global.scss';
.large-image {
    height: 450px;

    @include respond(tablet) {
        height: 640px;
    }

    @include respond(desktop) {
        height: 784px;
    }

    @include respond(large-desktop) {
        height: 840px;
    }
}

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