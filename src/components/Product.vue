<template>
  <div class="product flex">
    <div class="product__photo">
      <img
        :src="
          require(`../assets/image/products/${product.imgProduct}/${product.imgProduct}.jpg`)
        "
        alt=""
      />
    </div>
    <div class="product__info">
      <div>
        <span class="overline">{{ product.status }}</span>
        <h3>{{ product.name }} {{ product.category }}</h3>
        <p class="text">
          {{ product.description }}
        </p>
        <p class="price">
          {{
            product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
        <div class="actions flex">
          <div class="total">
            <span @click="onMinusTotal" class="minus">-</span>
            <span class="number">{{ qty }}</span>
            <span @click="onPlusTotal" class="plus">+</span>
          </div>
          <button @click="onAddCart" class="orange-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
  <div class="description flex flex-column">
    <div class="features">
      <h3>FEATURES</h3>
      <div>
        <p v-for="(text, index) in product.features" :key="index">
          {{ text.title }}
        </p>
      </div>
    </div>
    <div class="in-the-box">
      <h3>IN THE BOX</h3>
      <div>
        <div v-for="(item, index) in product.inTheBox" :key="index">
          <span>{{ item.total }}x</span>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="description-photo flex">
    <div class="left flex">
      <img
        :src="
          require(`../assets/image/products/${product.imgProduct}/${product.imgDescriptionOne}.jpg`)
        "
        alt=""
      />
      <img
        :src="
          require(`../assets/image/products/${product.imgProduct}/${product.imgDescriptionTwo}.jpg`)
        "
        alt=""
      />
    </div>
    <div class="right">
      <img
        :src="
          require(`../assets/image/products/${product.imgProduct}/${product.imgDescriptionThree}.jpg`)
        "
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Product",
  props: ["product"],
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
    ...mapMutations(["SET_CART_PRODUCT"]),
    onMinusTotal() {
      if (this.qty == 1) return;
      this.qty--;
    },
    onPlusTotal() {
      this.qty++;
    },
    onAddCart() {
      let data = {
        productId: this.product.productId,
        name: this.product.name,
        img: this.product.imgProduct,
        price: this.product.price,
        qty: this.qty,
      };
      this.SET_CART_PRODUCT(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  margin-bottom: 5rem;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    margin-bottom: 10.5rem;

    gap: 7.75rem;
  }
  .product__photo {
    flex: 4;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .product__info {
    flex: 4;
    align-self: center;
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
      font-size: 1.8rem;

      @media (min-width: 800px) {
        font-size: 2.5rem;
        margin-bottom: 1rem;

        line-height: 2.75rem;
      }
    }
    .price {
      margin-bottom: 3rem;
      font-weight: 700;
    }
    .text {
      margin-bottom: 3rem;
      opacity: 0.5;
      font-size: 15px;
    }

    .actions {
      .total {
        margin-right: 20px;
        background-color: hsl(0, 0%, 95%);
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer */
        -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
        -webkit-user-select: none; /* Chrome, Safari, and Opera */
        -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
        .minus,
        .plus {
          display: inline-block;
          font-size: 1rem;
          color: hsl(0, 0%, 81%);
          padding: 0.9rem 0.8rem;
          cursor: pointer;
          font-weight: 500;
          font-family: Manrope;

          &:hover {
            color: hsl(22, 65%, 57%);
          }
        }
        .number {
          font-size: 1rem;
          padding: 0.9rem 0.8rem;
          font-family: Manrope;
          font-weight: bold;
        }
      }
    }
  }
}
.description {
  gap: 50px;
  margin-bottom: 5.5rem;
  @media (min-width: 800px) {
    flex-direction: row;
  }
  .features {
    flex: 4;

    h3 {
      font-size: 25px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 20px;
      @media (min-width: 800px) {
        font-size: 35px;
      }
    }
    p {
      opacity: 0.5;
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
  .in-the-box {
    flex: 2;
    h3 {
      font-weight: 700;
      font-size: 25px;
      letter-spacing: 2px;
      margin-bottom: 20px;
      @media (min-width: 800px) {
        font-size: 35px;
      }
    }
    p {
      display: inline;
      opacity: 0.5;
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;
    }
    span {
      color: hsl(22, 65%, 57%);
      font-weight: bold;
      margin-right: 20px;
    }
  }
}
.description-photo {
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 5.5rem;

  @media (min-width: 800px) {
    margin-bottom: 7.5rem;
    flex-direction: row;
  }
  .left {
    gap: 1rem;
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .right {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>