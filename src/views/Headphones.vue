<template>
  <main>
    <section>
      <div class="container">
        <h4>HEADPHONES</h4>
      </div>
    </section>
    <div class="container products">
      <product-card
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      />
    </div>
    <category-link :products="categoryProduct" />
    <introduce />
  </main>
</template>

<script>
import CategoryLink from "../components/CategoryLink.vue";
import { mapState } from "vuex";
import Introduce from "../components/Introduce.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { CategoryLink, Introduce, ProductCard },
  computed: {
    ...mapState(["productHero", "categoryProduct", "productsHome", "products"]),
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