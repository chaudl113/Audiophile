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
      <span class="price">{{
        item.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      }}</span>
    </div>
    <span class="qty">{{ item.qty }}</span>
  </div>
</template>

<script>
export default {
  props: ["item"],
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
    img {
      border-radius: 10px;
      width: 4rem;
      height: 4rem;
    }
  }

  .info {
    flex: 3;
    display: flex;
    padding-left: 15px;
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
  .qty {
    display: flex;
    justify-content: center;
    align-self: center;
    opacity: 0.5;
    font-weight: 900;
  }
}
</style>