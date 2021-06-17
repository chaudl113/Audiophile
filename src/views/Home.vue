<template>
  <product-hero :product-hero="productHero" />
  <category-link :products="categoryProduct" />
  <section class="product__top">
    <speaker
      :product="item"
      v-for="(item, index) in productsHome"
      :key="index"
    />
  </section>
  <introduce />
</template>

<script>
import { mapState } from "vuex";
import CategoryLink from "../components/CategoryLink.vue";
import Introduce from "../components/Introduce.vue";
import ProductHero from "../components/ProductHero.vue";
import Speaker from "../components/ProductHome.vue";

export default {
  name: "Home",
  components: { ProductHero, CategoryLink, Speaker, Introduce },
  computed: {
    ...mapState(["productHero", "categoryProduct", "productsHome"]),
  },
};
</script>
