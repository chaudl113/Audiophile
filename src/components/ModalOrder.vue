<template>
  <div class="order flex flex-column">
    <div class="check-mark"></div>
    <p class="title">THANK YOU FOR YOUR ORDER</p>

    <p class="text">You will receive an email confirmation shortly.</p>
    <div class="order-body">
      <div class="top">
        <item-checkout
          v-for="(item, index) in carts"
          :key="index"
          :item="item"
        />
      </div>
      <div class="grant">
        <h4>GRAND TOTAL</h4>
        <p>
          {{
            grand.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
      </div>
    </div>

    <button @click="backHome" class="orange-button">back home</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ItemCheckout from "./ItemCheckout.vue";
export default {
  components: { ItemCheckout },
  props: ["carts", "grand"],
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"]),
    backHome() {
      this.REMOVE_FROM_CART();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  border-radius: 10px;

  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: #fff;
  width: 90vw;
  max-width: 33.75rem;
  box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.4);
  gap: 10px;
  .check-mark {
    position: relative;
    width: 4rem;
    height: 4rem;
    background-color: hsl(22, 65%, 57%);
    border-radius: 50%;
    margin-bottom: 1.5rem;
    &::after {
      content: url("../assets/image/check-mark.svg");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.6rem;
      height: 1.5rem;
    }
  }
  .title {
    font-size: 1.5rem;
  }
  .text {
    opacity: 0.5;
  }
  .order-body {
    .top {
      background-color: hsl(0, 0%, 95%);
      padding: 1rem 1.5rem;

      .item:last-child {
        margin-bottom: 0;
      }
    }
    .grant {
      background-color: #000;
      color: #fff;
      padding: 1rem 1.5rem;
      margin-bottom: 2rem;
      border-radius: 0 0 30px 30px;
      h4 {
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 0.5rem;
        opacity: 0.5;
      }
    }
  }
}
</style>