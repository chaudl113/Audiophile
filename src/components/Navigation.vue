<template>
  <header>
    <div class="container">
      <div class="header__container flex">
        <div @click.prevent="toggleMenu" class="menu-mobile">
          <div class="burger" :class="{ 'open-menu': menuActive }"></div>
        </div>
        <a href="#" class="logo nav-link"
          ><img src="../assets/image/shared/desktop/logo.svg" alt=""
        /></a>
        <nav>
          <ul class="nav__list flex">
            <li>
              <router-link class="nav-link" to="#">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="#">headphones</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="#">speakers</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="#">earphones</router-link>
            </li>
          </ul>
        </nav>
        <div class="icon__cart">
          <img src="../assets/image/shared/desktop/icon-cart.svg" alt="" />
          <span class="count__cart">1</span>
        </div>
      </div>
    </div>
  </header>
  <transition name="sidebar">
    <sidebar-mobile :menu-active="menuActive ? 'show' : ''" v-if="menuActive" />
  </transition>
</template>

<script>
import SidebarMobile from "./SidebarMobile.vue";
export default {
  components: { SidebarMobile },
  name: "Navigation",
  data() {
    return {
      menuActive: false,
    };
  },
  created() {
    this.ckeckScreen();
    window.addEventListener("resize", this.ckeckScreen);
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    ckeckScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 900) {
        this.menuActive = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #191919;
  color: #fff;
  .header__container {
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
      span {
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