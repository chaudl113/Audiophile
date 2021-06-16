<template>
  <product-hero :product-hero="productHero" />
  <category-link :products="categoryProduct" />
  <speaker />
</template>

<script>
import { mapState } from "vuex";
import CategoryLink from "../components/CategoryLink.vue";
import ProductHero from "../components/ProductHero.vue";
import Speaker from '../components/SpeakerProduct.vue'

export default {
  name: "Home",
  components: { ProductHero, CategoryLink, Speaker },
  computed: {
    ...mapState(["productHero", "categoryProduct"]),
  },
};
</script>
