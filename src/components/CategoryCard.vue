<template>
  <li class="navlink">
    <img
      class="img-card"
      :src="require(`../assets/image/shared/desktop/${product.img}.png`)"
      alt=""
    />
    <div class="card">
      <h6>{{ product.name }}</h6>
      <div>
        <a :href="product.name">
          Shop
          <img src="../assets/image/shared/desktop/icon-arrow-right.svg" alt=""
        /></a>
      </div>
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
  padding-top: 25%;
  .img-card {
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
  .card {
    background-color: #f2f2f2;
    padding-top: 25%;
    border-radius: 10px;
    h6 {
      margin-bottom: 13px;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 700;
    }
    a {
      display: inline-flex;
      margin-bottom: 13px;
      color: initial;
      text-transform: uppercase;
      text-decoration: none;
      align-items: center;
      opacity: 0.5;
      font-size: 13px;
      font-weight: 700;
      img {
        margin-left: 4px;
        width: 9px;
        height: 10px;
      }
    }
  }
}
</style>