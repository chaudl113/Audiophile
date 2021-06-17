<template>
  <section
    class="product_hero"
    :style="{
      backgroundImage: `url(${require(`@/assets/image/home/desktop/${productHero.img}.jpg`)})`,
    }"
  >
    >
    <div class="container">
      <div>
        <span>{{ productHero.status }}</span>
        <h1>{{ productHero.name }}</h1>
        <p>
          {{ productHero.description }}
        </p>
        <button class="status-button orange-bg text-white">see product</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product Hero",
  props: ["productHero"],
  computed: {
    background(name) {
      return require(`../assets/image/home/desktop/${name}.jpg`);
    },
  },
};
</script>
<style lang="scss" scoped>
.product_hero {
  margin-bottom: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 900px) {
    background-size: 100% 100%;

    margin-bottom: 5rem;
  }
  .container {
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    @media (min-width: 900px) {
      justify-content: initial;
    }
    @media (min-width: 1280px) {
      justify-content: initial;
      text-align: initial;
    }
    div {
      flex: 1;
      text-align: center;

      @media (min-width: 900px) {
        text-align: center;
        flex: initial;
      }
      @media (min-width: 1280px) {
        flex: initial;
        text-align: initial;
      }
      span {
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 7px;
        font-weight: 300;
        opacity: 0.5;
        margin-bottom: 17px;
        font-size: 14px;
      }
      h1 {
        margin: auto;
        font-size: 40px;
        line-height: 55px;
        margin-bottom: 17px;
        font-weight: 700;
      }
      p {
        margin: auto;
        opacity: 0.5;
        font-weight: 300;
        margin-bottom: 37px;
      }
      @media (min-width: 900px) {
        h1 {
          margin: initial;
          font-size: 52px;
          line-height: 55px;
          margin-bottom: 17px;
          font-weight: 700;
        }
        p {
          margin: auto;
          max-width: 32%;
          opacity: 0.5;
          font-weight: 300;
          margin-bottom: 37px;
        }
      }

      @media (min-width: 1280px) {
        h1 {
          margin: initial;
          font-size: 52px;
          max-width: 50%;
          line-height: 55px;
          margin-bottom: 17px;
          font-weight: 700;
        }
        p {
          margin: initial;
          max-width: 32%;
          opacity: 0.5;
          font-weight: 300;
          margin-bottom: 37px;
        }
      }
    }
  }
}
</style>