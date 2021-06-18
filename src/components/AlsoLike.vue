<template>
  <div class="aloslike">
    <h2>YOU MAY ALSO LIKE</h2>

    <ul class="menu-list flex">
      <like-card
        v-for="(item, index) in productAlsoLike"
        :key="index"
        :product="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LikeCard from "./LikeCard.vue";
export default {
  components: { LikeCard },
  name: "AloLike",
  computed: {
    ...mapGetters(["productAlsoLike"]),
  },
};
</script>


<style lang="scss" scoped>
.aloslike {
  margin-bottom: 8rem;

  h2 {
    display: block;
    text-align: center;
    margin: auto;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 0.106rem;
    text-transform: uppercase;
  }
  .menu-list {
    background-color: hsl(0, 0%, 100%);
    flex-direction: row;
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