<template>
  <section>
    <div class="container">
      <h4>HEADPHONES</h4>
    </div>
  </section>
  <div class="container products">
    <product-card
      v-for="(item, index) in filteredHeadphones"
      :key="index"
      :product="item"
    />
  </div>
  <category-link class="mb-10" :products="categoryProduct" />
  <introduce class="mb-10" />
</template>

<script>
import CategoryLink from "../components/CategoryLink.vue";
import { mapState, mapGetters } from "vuex";
import Introduce from "../components/Introduce.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { CategoryLink, Introduce, ProductCard },
  created() {
    this.filteredData;
  },
  computed: {
    ...mapState(["productHero", "categoryProduct", "productsHome", "products"]),
    ...mapGetters(["filteredHeadphones"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #000;

  .container {
    margin-bottom: 10rem;

    color: #fff;
    h4 {
      padding: 6rem 0px;
      text-align: center;
      letter-spacing: 2px;
      font-size: 2.5rem;
    }
  }
}
</style>