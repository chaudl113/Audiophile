<template>
  <div class="container orange-bg">
    <div class="speaker">
      <div class="speaker__photo">
        <img
          src="../assets/image/product-zx9-speaker/desktop/image-gallery-3.jpg"
          alt=""
        />
      </div>
      <div class="speaker__info">
        <h3>ZX9 SPEAKER</h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <a href="#" class="status-button">See product</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  padding: 2rem 1.5rem;

  margin-bottom: 6rem;
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
        max-width: 15rem;
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