<template>
  <section class="speakers">
    <div class="container">
      <h4>SPEAKERS</h4>
    </div>
  </section>
  <div class="container products">
    <product-card
      v-for="(item, index) in filteredSpeakers"
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
  computed: {
    ...mapState(["productHero", "categoryProduct", "productsHome"]),
    ...mapGetters(["filteredSpeakers"]),
  },
};
</script>

<style lang="scss" scoped>
.speakers {
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