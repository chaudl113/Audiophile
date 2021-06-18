<template>
  <footer>
    <div class="container">
      <nav class="flex">
        <a href="/">
          <img src="../assets/image/shared/desktop/logo.svg" alt=""
        /></a>
        <ul class="nav__list flex">
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/headphones"
              >headphones</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/speakers">speakers</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/earphones"
              >earphones</router-link
            >
          </li>
        </ul>
      </nav>
      <p class="about-us">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="social">
        <p>Copyright 2021. All rights reserved</p>
        <div class="icon-social">
          <a href="#"
            ><img src="../assets/image/shared/desktop/icon-facebook.svg" alt=""
          /></a>
          <a href="#"
            ><img src="../assets/image/shared/desktop/icon-twitter.svg" alt=""
          /></a>
          <a href="#"
            ><img
              src="../assets/image/shared/desktop/icon-instagram.svg"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #000;
  padding: 3.25rem 1.5rem 2.375rem;
  color: #fff;
  .container {
    nav {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin-bottom: 40px;
      img {
        max-width: 9rem;
      }
      @media (min-width: 900px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        @media (min-width: 900px) {
          flex-direction: row;
          justify-content: flex-start;
          gap: 32px;
        }
        @media (min-width: 1200px) {
          flex-direction: row;
          justify-content: space-between;
          gap: 32px;
        }
        li {
          list-style: none;
          .nav-link {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 13px;
            cursor: pointer;
            letter-spacing: 2px;
          }
        }
      }
    }
    .about-us {
      font-weight: 500;
      margin-bottom: 3rem;
      opacity: 0.5;
      width: 100%;
      text-align: center;
      @media (min-width: 900px) {
        width: 100%;
        text-align: start;
      }
      @media (min-width: 1200px) {
        width: 50%;
        text-align: start;
      }
    }
    .social {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      gap: 50px;
      @media (min-width: 770px) {
        flex-direction: row;
      }
      p {
        opacity: 0.5;
      }
      .icon-social {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>