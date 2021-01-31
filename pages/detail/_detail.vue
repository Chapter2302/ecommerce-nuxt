<template>
  <div class="detail-page-container">
    <div class="detail-page-wrapper">
      <Crumb :content="['home', 'detail']"/>
      <ProductDetail />
      <DetailBlock />
      <MixAndMatch />
      <RecommendBlock />
    </div>
  </div>
</template>

<script>
import Crumb from "../../components/Crumb/Crumb.vue"
import ProductDetail from "../../components/ProductDetail/ProductDetail.vue"
import DetailBlock from "../../components/BlockContent/DetailBlock.vue"
import MixAndMatch from "../../components/ProductDetail/MixAndMatch.vue"
import RecommendBlock from "../../components/RecommendBlock/RecommendBlock.vue"

export default {
  components: { 
    Crumb,
    ProductDetail,
    MixAndMatch,
    DetailBlock,
    RecommendBlock,
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>