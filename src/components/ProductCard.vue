<template>
  <div class="product">
    <div class="product__photo">
      <img
        :src="require(`../assets/image/products/${product.imgProduct}.jpg`)"
        alt=""
      />
    </div>
    <div class="product__info">
      <div>
        <span class="overline"> {{ product.status }}</span>
        <h3>{{ product.name }}</h3>
        <p>
         {{ product.description }}
        </p>
        <a href="#" class="orange-button">See product</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.container {
  .product {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: 800px) {
      gap: 7.85rem;
      flex-direction: row;
    }
    .product__photo {
      order: 1;
      flex: 4;
      border-radius: 10px;
      @media (min-width: 800px) {
        order: 2;
      }
      img {
        border-radius: 10px;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .product__info {
      order: 2;
      flex: 4;
      @media (min-width: 800px) {
        order: 1;
      }
      display: block;
      width: 100%;

      div {
        padding: 2.25rem 2.5rem;
        text-align: center;

        @media (min-width: 800px) {
          padding: 6.25rem 2.5rem;
          text-align: initial;
        }
        .overline {
          display: inline-block;
          text-transform: uppercase;
          color: hsl(22, 65%, 57%);
          font-size: 0.8125rem;
          line-height: 0.063rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.625rem;
        }
        h3 {
          text-transform: uppercase;
          margin-bottom: 1rem;
          @media (min-width: 800px) {
            font-size: 2.5rem;
            margin-bottom: 1rem;

            line-height: 2.75rem;
          }
        }
        p {
          margin-bottom: 3rem;
          opacity: 0.5;
        }
      }
    }
    &:nth-child(even) {
      .product__photo {
        order: 1 !important;
      }
      .product__info {
        order: 2 !important;
      }
    }
  }
}
</style>