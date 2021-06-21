<template>
  <div class="item flex">
    <div class="info__photo">
      <img
        width="50px"
        height="50px"
        src="../assets/image/products/image-xx99-mark-two/image-xx99-mark-two.jpg"
        alt=""
      />
    </div>
    <div class="info">
      <h6 class="name">{{ item.name }}</h6>
      <span class="price"
        >{{
          item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}</span
      >
    </div>
    <div class="item__size">
      <span @click="onMinus(item.productId)" class="minus">-</span>
      <span class="number">{{ item.qty }}</span>
      <span @click="onPlus(item.productId)" class="plus">+</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapMutations(["onMinusItemCart", "onPlusItemCart"]),
    onMinus(id) {
      this.onMinusItemCart(id);
    },
    onPlus(id) {
      this.onPlusItemCart(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  justify-content: space-between;
  margin-bottom: 0.8rem;
  &:last-child {
    margin-bottom: 2rem;
  }
  .info__photo {
    flex: 3;
    img {
      border-radius: 10px;
      width: 4rem;
      height: 4rem;
    }
  }

  .info {
    flex: 3;
    display: flex;
    padding-right: 5px;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.081rem;

    .name {
      font-size: 15px;
      font-weight: 900;
    }
    .price {
      opacity: 0.5;
      font-weight: bold;
      font-size: 13px;
    }
  }
  .item__size {
    flex: 3;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: hsl(0, 0%, 95%);

    .minus,
    .plus {
      display: inline-block;
      font-size: 1rem;
      color: hsl(0, 0%, 81%);
      cursor: pointer;
      font-weight: 500;
      padding: 0.5rem 0.8rem;

      font-family: Manrope;

      &:hover {
        color: hsl(22, 65%, 57%);
      }
    }
    .number {
      font-size: 1rem;
      font-family: Manrope;
      font-weight: bold;
      padding: 0.5rem 0.8rem;
    }
  }
}
</style>