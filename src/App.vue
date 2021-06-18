<template>
  <navigation />
  <main>
    <router-view />
  </main>
  <Footer />
</template>


<script>
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation, Footer },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.mb-10 {
  margin-bottom: 10rem !important;
}

.container {
  width: 90vw;
  max-width: 1110px;
  margin: 0 auto;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

// Status Button Styling

.status-button {
  font-size: 0.875rem;
  align-items: center;
  font-weight: 700;
  padding: 0.9rem 1.665rem;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
}
.orange-button {
  font-size: 0.875rem;
  align-items: center;
  font-weight: 700;
  padding: 0.9rem 1.665rem;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  display: inline-block;

  background-color: hsl(22, 65%, 57%);
  &:hover {
    background-color: hsl(21, 94%, 75%);
  }
}

.orange-bg {
  background-color: hsl(22, 65%, 57%);
}

.text-white {
  color: #fff;
}
</style>
