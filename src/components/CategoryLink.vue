<template>
  <div class="category-link">
    <div class="container">
      <ul class="menu-list flex">
        <card-product
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import CardProduct from "./CategoryCard.vue";
export default {
  components: { CardProduct },
  name: "CategoryLink",
  props: ["products"],
};
</script>

<style lang="scss" scoped>
.category-link {
  margin-bottom: 1rem;
  @media (min-width: 900px) {
    margin-bottom: 5rem;
  }
  .menu-list {
    background-color: hsl(0, 0%, 100%);
    flex-direction: row;
    padding: 2rem 1.5rem;
    display: grid;
    gap: 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 530px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 792px) {
      grid-template-columns: repeat(3, 1fr);
    }

   
  }
}
</style>