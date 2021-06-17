<template>
  <div class="container orange-bg" v-if="product.description">
    <div class="speaker">
      <div class="speaker__photo">
        <img
          :src="require(`../assets/image/home/desktop/${product.img}.jpg`)"
          alt=""
        />
      </div>
      <div class="speaker__info">
        <h3>{{ product.name }}</h3>
        <p>
          {{ product.description }}
        </p>
        <a :href="product.linkBuy" class="status-button">See product</a>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="no-des">
      <div class="product__photo">
        <img
          :src="require(`../assets/image/home/desktop/${product.img}.jpg`)"
          alt=""
        />
      </div>
      <div class="product__info">
        <div>
          <h3>{{ product.name }}</h3>
          <a :href="product.linkBuy" class="status-button">See product</a>
        </div>
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
  .no-des {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin-bottom: 2rem;
    @media (min-width: 800px) {
      min-height: 450px;
      max-height: 450px;
      flex-direction: row;
    }
    .product__photo {
      order: 1;
      flex: 4;
      box-shadow: 0 4px 6px -1px rgb(0, 0, 0.1), 0 2px 4px -1px rgb(0, 0, 0.6);
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
      flex: 3;
      @media (min-width: 800px) {
        order: 1;
      }
      display: block;
      border-radius: 10px;
      width: 100%;
      box-shadow: 0 4px 6px -1px rgb(0, 0, 0.1), 0 2px 4px -1px rgb(0, 0, 0.6);

      background-color: hsl(0, 0%, 95%);
      div {
        padding: 2.25rem 2.5rem;
        text-align: center;

        @media (min-width: 800px) {
          padding: 6.25rem 2.5rem;
          text-align: initial;
        }
        h3 {
          text-transform: uppercase;
          margin-bottom: 1rem;
          @media (min-width: 800px) {
            font-size: 24px;
            letter-spacing: 3px;
            font-weight: 700;
            margin-bottom: 3rem;
          }
        }
        .status-button {
          outline: 1px solid hsl(0, 0%, 0%);
          color: hsl(0, 0%, 0%);
          font-weight: 700;
        }
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

  &:last-child {
    margin-bottom: 10rem;
  }
}

.orange-bg {
  display: block;
  padding: 2rem 1.5rem;

  margin-bottom: 2rem;

  border-radius: 10px;
  background-image: url("../assets/image/home/desktop/pattern-circles.svg");
  background-repeat: no-repeat;
  background-size: 82%;
  background-position: center -1rem;
  @media (min-width: 800px) {
    padding: 2rem 8.5rem;
  }
  @media (min-width: 1200px) {
    padding: 8.5rem;
    background-position: -7.75rem 1rem;
  }
  .speaker {
    position: relative;
    text-align: center;

    .speaker__photo {
      img {
        max-width: 100%;
        border-radius: 10px;
        margin-bottom: 20px;

        @media (min-width: 1200px) {
          position: absolute;
          top: -20px;
          left: 0;
          max-width: 24rem;
          border-radius: 10px;
        }
      }
    }
    .speaker__info {
      @media (min-width: 1200px) {
        max-width: 41%;
        margin-left: auto;
        display: block;
        text-align: left;
      }
      h3 {
        font-size: 30px;
        color: #fff;
        font-weight: 900;
        letter-spacing: 3px;
        line-height: 50px;
        margin-bottom: 20px;
        @media (min-width: 900px) {
          font-size: 45px;
        }
        @media (min-width: 1200px) {
          font-size: 50px;
        }
      }
      p {
        color: #fff;
        font-weight: 400;
        line-height: 19px;
        margin-bottom: 25px;
        opacity: 0.7;
      }
      .status-button {
        display: inline-block;
        background-color: hsl(0, 0%, 0%);
        color: #fff;
        &:hover {
          background-color: hsl(0, 0%, 30%);
          outline-color: hsl(0, 0%, 30%);
        }
      }
    }
  }
}
</style>