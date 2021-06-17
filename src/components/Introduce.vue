<template>
  <div class="container">
    <div class="introduce">
      <div class="introduce__photo">
        <img src="../assets/image/shared/desktop/image-best-gear.jpg" alt="" />
      </div>
      <div class="introduce__info">
        <div>
          <h3>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  .introduce {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    gap: 30px;
    margin-bottom: 2rem;
    @media (min-width: 800px) {
      flex-direction: row;
      height: 600px;
    }
    .introduce__photo {
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
    .introduce__info {
      flex: 4;
      @media (min-width: 800px) {
        order: 1;
      }
      display: block;

      div {
        padding: 2.25rem 0.5rem;
        text-align: center;

        @media (min-width: 800px) {
          width: 90%;
          padding: 8.25rem 2.5rem;
          text-align: initial;
        }
        h3 {
          text-transform: uppercase;
          margin-bottom: 1rem;
          @media (min-width: 800px) {
            font-size: 2.5rem;
            line-height: 40px;
            letter-spacing: 1px;
            font-weight: 900;
            margin-bottom: 3rem;
          }
          span {
            color: hsl(22, 65%, 57%);
          }
        }
        p {
          font-weight: 700;
          opacity: 0.5;
          font-size: 0.9375rem;
        }
      }
    }
  }
}
</style>