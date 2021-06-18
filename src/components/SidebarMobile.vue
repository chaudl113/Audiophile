<template>
  <div class="sidebar" :class="menuActive">
    <ul class="menu-list flex">
      <li class="navlink">
        <img
          class="img-card"
          src="../assets/image/shared/desktop/image-headphones.png"
          alt=""
        />
        <div class="card">
          <h6>Headphones</h6>
          <div>
            <a href="/">
              Shop
              <img
                src="../assets/image/shared/desktop/icon-arrow-right.svg"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="navlink">
        <img
          class="img-card"
          src="../assets/image/shared/desktop/image-speakers.png"
          alt=""
        />
        <div class="card">
          <h6>Headphones</h6>
          <div>
            <a href="/">
              Shop
              <img
                src="../assets/image/shared/desktop/icon-arrow-right.svg"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="navlink">
        <img
          class="img-card"
          src="../assets/image/shared/desktop/image-earphones.png"
          alt=""
        />
        <div class="card">
          <h6>Headphones</h6>
          <div>
            <a href="/">
              Shop
              <img
                src="../assets/image/shared/desktop/icon-arrow-right.svg"
                alt=""
            /></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ["menuActive"],
};
</script>

<style lang="scss" scoped>
.show {
  box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.4);
}
.sidebar {
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 999;

  .menu-list {
    background-color: hsl(0, 0%, 100%);
    flex-direction: row;
    padding: 2rem 1.5rem;
    display: grid;
    gap: 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 530px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 792px) {
      grid-template-columns: repeat(3, 1fr);
    }

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
  }
}
</style>