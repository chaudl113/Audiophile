<template>
  <header>
    <div class="container">
      <div class="header__container flex">
        <div @click.prevent="toggleMenu" class="menu-mobile">
          <div class="burger" :class="{ 'open-menu': menuActive }"></div>
        </div>
        <a href="/" class="logo nav-link"
          ><img src="../assets/image/shared/desktop/logo.svg" alt=""
        /></a>
        <nav>
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
              <router-link class="nav-link" to="/speakers"
                >speakers</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/earphones"
                >earphones</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="icon__cart" @click="onToggleCart">
          <img src="../assets/image/shared/desktop/icon-cart.svg" alt="" />
          <span v-if="carts.length" class="count__cart">{{
            carts.length
          }}</span>
        </div>
        <div class="cart" v-if="cartAcive">
          <div class="header__cart flex">
            <h4>Cart({{carts.length}})</h4>
            <a href="#" @click.prevent="removeAll">Remove all </a>
          </div>
          <div class="body__cart" v-if="carts.length">
            <item-card
              v-for="(item, index) in carts"
              :key="index"
              :item="item"
            />
          </div>
          <p class="body__cart__empty" v-else>YOUR CART IS EMPTY</p>

          <div class="bottom__cart flex">
            <h4 class="totol">TOTAL</h4>
            <h4 class="totol__price">
              {{
                total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              
              }}
            </h4>
          </div>
          <a href="#" class="orange-button">Checkout</a>
        </div>
      </div>
    </div>
  </header>
  <transition name="sidebar">
    <sidebar-mobile :menu-active="menuActive ? 'show' : ''" v-if="menuActive" />
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import SidebarMobile from "./SidebarMobile.vue";
import ItemCard from "./ItemCard.vue";

export default {
  components: { SidebarMobile, ItemCard },
  name: "Navigation",
  data() {
    return {
      menuActive: false,
      cartAcive: false,
    };
  },
  created() {
    this.ckeckScreen();
    window.addEventListener("resize", this.ckeckScreen);
  },
  computed: {
    ...mapState(["carts"]),
    total() {
      let total = 0;
      this.carts.map((i) => {
        console.log(i.qty);

        console.log(i.price);
        total += i.qty * parseInt(i.price);
      });
      return total;
    },
  },
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"]),
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    onToggleCart() {
      this.cartAcive = !this.cartAcive;
    },
    ckeckScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 900) {
        this.menuActive = false;
        return;
      }
    },
    removeAll() {
      this.REMOVE_FROM_CART();
    },
  },
  watch: {
    $route() {
      this.cartAcive = false;
      this.menuActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #191919;
  color: #fff;
  .header__container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    justify-content: space-between;
    padding: 30px 0;
    align-items: center;

    .menu-mobile {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      @media (min-width: 900px) {
        display: none;
      }
      .open-menu {
        transform: translateX(-21px);
        background: transparent !important;
        &::before {
          transition: all 0.5s ease-in-out;

          transform: rotate(45deg) translate(15px, -15px) !important;
        }
        &::after {
          transition: all 0.5s ease-in-out;
          transform: rotate(-45deg) translate(15px, 15px) !important;
        }
      }
      .burger {
        position: relative;
        width: 20px;
        height: 2px;
        background-color: #fff;
        transition: all 0.5s ease-in-out;

        &::before {
          position: absolute;
          content: "";
          width: 20px;
          height: 2px;
          background-color: #fff;
          transition: all 0.5s ease-in-out;
          transform: translateY(6px);
        }
        &::after {
          position: absolute;
          content: "";
          width: 20px;
          height: 2px;
          background-color: #fff;
          transition: all 0.5s ease-in-out;
          transform: translateY(-6px);
        }
      }
    }

    .logo {
      font-size: 26px;
      border-style: none;
      font-weight: 900;
      color: #fff;
    }
    nav {
      display: none;
      @media (min-width: 1280px) {
        display: grid;
      }
      .nav__list {
        display: flex;
        gap: 32px;
        li {
          list-style: none;
          color: #fff;
          .nav-link {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 13px;
            cursor: pointer;
            letter-spacing: 2px;
            &:hover {
              color: hsl(22, 65%, 57%);
            }
          }
        }
      }
    }

    .icon__cart {
      cursor: pointer;
      position: relative;
      .count__cart {
        background: hsl(22, 65%, 57%);
        border-radius: 50%;
        width: 18px;
        height: 18px;
        text-align: center;
        font-size: 13px;
        position: absolute;
        top: -8px;
        left: 14px;
      }
    }

    .cart {
      background-color: #fff;
      border-radius: 10px;
      color: #191919;
      width: 100%;
      max-width: 23.5rem;
      position: absolute;
      z-index: 999;
      right: 0px;
      top: 6rem;
      padding: 2rem 1.75rem;
      box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.4);
      .header__cart {
        justify-content: space-between;
        margin-bottom: 2rem;
        h4 {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 700;
        }
        a {
          font-size: 13px;
          color: #000;
          opacity: 0.5;
        }
      }

      .bottom__cart {
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      p.body__cart__empty {
        text-align: center;
        margin: 50px 0px;
        font-size: 25px;
        font-weight: 900;
      }
      .orange-button {
        display: flex;
        justify-content: center;
      }
    }
  }
}

.sidebar-enter-active {
  transition: all 0.5s ease-in-out;
}
.sidebar-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.sidebar-enter-from ,
.sidebar-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>