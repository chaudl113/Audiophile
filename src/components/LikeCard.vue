<template>
  <li class="navlink" v-if="product">
    <div class="card">
      <img
        class="img-card"
        :src="
          require(`../assets/image/products/${product.imgProduct}/${product.imgProduct}.jpg`)
        "
        alt=""
      />
    </div>
    <h6>{{ product.name }}</h6>
    <div>
      <a :href="`/product/${product.productId}`" class="orange-button"
        >See product
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: ["product"],
};
</script>
<style lang="scss" scoped>
.navlink {
  list-style: none;
  text-align: center;
  position: relative;
  flex-direction: column;
  width: 100%;

  .card {
    margin-bottom: 30px;
    .img-card {
      width: 100%;
      padding: 30px;
      padding-bottom: 0px;
    }
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  h6 {
    margin-bottom: 30px;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>