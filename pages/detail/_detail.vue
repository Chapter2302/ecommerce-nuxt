<template>
  <div class="detail-page-container">
    <div class="detail-page-wrapper">
      <Crumb />
      <ProductDetail />
      <BlockContent />
      <MixAndMatch />
      <RecommendBlock />
    </div>
  </div>
</template>

<script>
import Crumb from "../../components/Crumb/Crumb.vue"
import ProductDetail from "../../components/ProductDetail/ProductDetail.vue"
import BlockContent from "../../components/BlockContent/BlockContent.vue"
import MixAndMatch from "../../components/ProductDetail/MixAndMatch.vue"
import RecommendBlock from "../../components/RecommendBlock/RecommendBlock.vue"

export default {
  components: { 
    Crumb,
    ProductDetail,
    MixAndMatch,
    BlockContent,
    RecommendBlock,
  }
}
</script>

<style>

</style>