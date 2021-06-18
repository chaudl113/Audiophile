<template>
  <div class="container">
    <a href="#" class="back">Go back</a>
    <product :product="currentProduct" />
    <also-like />
    <category-link class="mb-10" :products="categoryProduct" />
    <introduce class="mb-10" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import AlsoLike from "../components/AlsoLike.vue";
import CategoryLink from "../components/CategoryLink.vue";
import Introduce from "../components/Introduce.vue";
import Product from "../components/Product.vue";
export default {
  components: { AlsoLike, CategoryLink, Introduce, Product },
  data() {
    return {
      currentProduct: null,
    };
  },
  computed: {
    ...mapState(["categoryProduct", "currentProductArray", "products"]),
  },
  created() {
    this.getCurrentProduct();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_PRODUCT"]),
    getCurrentProduct() {
      this.SET_CURRENT_PRODUCT(this.$route.params.productId);
      this.currentProduct = this.currentProductArray[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: #000;
  .back {
    display: inline-block;
    font-weight: 500;
    color: #000;
    font-size: 14px;
    padding: 80px 0 50px 0;
    opacity: 0.5;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>