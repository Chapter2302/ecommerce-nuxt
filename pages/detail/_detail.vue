<template>
  <div class="detail-page-container">
    <Header />
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
import Header from "@/components/Header/Header.vue"
import Crumb from "../../components/Crumb/Crumb.vue"
import ProductDetail from "../../components/ProductDetail/ProductDetail.vue"
import DetailBlock from "../../components/ProductDetail/DetailBlock.vue"
import MixAndMatch from "../../components/ProductDetail/MixAndMatch.vue"
import RecommendBlock from "../../components/ProductDetail/RecommendBlock.vue"

export default {
  components: { 
    Header,
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