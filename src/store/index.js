import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    productHero: {
      name: "XX99 MARK II HEADPHONE",
      description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      img: "image-hero",
    },
    categoryProduct: [{
        name: "HEADPHONES",
        img: "image-headphones",
      },
      {
        name: "SPEAKERS",
        img: "image-speakers",
      },
      {
        name: "EARPHONES",
        img: "image-earphones",
      },
      
    ],
  },
  mutations: {},
  actions: {},
  modules: {}
})