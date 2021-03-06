import {
  createStore
} from 'vuex'

function updateLocalStotage(cart) {
  localStorage.setItem('carts', JSON.stringify(cart))
}

export default createStore({
  state: {
    productHero: {
      status: 'coming soon',
      name: "XX99 MARK II HEADPHONE",
      description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      img: "image-hero",
      linkBuy: '/'
    },
    categoryProduct: [{
        name: "headphones",
        img: "image-headphones",
      },
      {
        name: "speakers",
        img: "image-speakers",
      },
      {
        name: "earphones",
        img: "image-earphones",
      },

    ],
    productsHome: [{
        id: 1,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: "ZX9 SPEAKER",
        img: "image-gallery-3",
        description: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
        linkBuy: '/'
      },
      {
        name: "ZX7 SPEAKER",
        img: "speaker-zx7",
        description: '',
        linkBuy: '/'

      },
      {
        name: "YX1 EARPHONES",
        img: "image-earphones-yx1",
        description: '',
        linkBuy: '/'

      }
    ],
    products: [{
        productId: 1,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX99 MARK I',
        price: 175000,
        imgProduct: 'product-xx99-mark-one-headphones',
        imgDescriptionOne: 'product-xx99-mark-one-headphones-image-gallery-1',
        imgDescriptionTwo: 'product-xx99-mark-one-headphones-image-gallery-2',
        imgDescriptionThree: 'product-xx99-mark-one-headphones-image-gallery-3',
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        features: [{
          title: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you???re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you???ll never miss a beat.'
        }, {
          title: 'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'
        }],
        inTheBox: [{
            total: 1,
            title: 'Speaker unit'
          },
          {
            total: 2,
            title: 'Replacement earcups'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          },
          {
            total: 1,
            title: 'Travel bag'
          }
        ]
      },
      {
        productId: 2,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX99 MARK II',
        price: 175000,
        imgProduct: 'image-xx99-mark-two',
        imgDescriptionOne: 'image-xx99-mark-two-image-gallery-1',
        imgDescriptionTwo: 'image-xx99-mark-two-image-gallery-2',
        imgDescriptionThree: 'image-xx99-mark-two-image-gallery-3',
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        features: [{
          title: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.'
        }, {
          title: 'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.'
        }],
        inTheBox: [{
            total: 1,
            title: 'Headphone unit'
          },
          {
            total: 2,
            title: 'Replacement earcups'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          }
        ]
      },
      {
        productId: 3,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX59',
        price: 175000,
        imgProduct: 'product-xx59-headphones',
        imgDescriptionOne: 'product-xx59-headphones-image-gallery-1',
        imgDescriptionTwo: 'product-xx59-headphones-image-gallery-2',
        imgDescriptionThree: 'product-xx59-headphones-image-gallery-3',
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        features: [{
          title: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.'
        }, {
          title: 'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
        }],
        inTheBox: [{
            total: 1,
            title: 'Headphone unit'
          },
          {
            total: 2,
            title: 'Replacement earcups'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          }
        ]
      },
      {
        productId: 4,
        category: 'speakers',
        status: 'NEW PRODUCT',
        name: 'ZX9 ',
        price: 175000,
        imgProduct: 'product-zx9-speaker',
        imgDescriptionOne: 'product-zx9-speaker-image-gallery-1',
        imgDescriptionTwo: 'product-zx9-speaker-image-gallery-2',
        imgDescriptionThree: 'product-zx9-speaker-image-gallery-3',
        description: 'Upgrade your sound system with the all new ZX9 active speaker. It???s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        features: [{
          title: 'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).'
        }, {
          title: 'Discover clear, more natural sounding highs than the competition with ZX9???s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5??? aluminum alloy bass unit. You???ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
        }],
        inTheBox: [{
            total: 2,
            title: 'Speaker unit'
          },
          {
            total: 2,
            title: 'Speaker cloth panel'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          },
          {
            total: 1,
            title: '10m optical cable'
          }
        ]
      },
      {
        productId: 5,
        category: 'speakers',
        status: 'NEW PRODUCT',
        name: 'ZX7 ',
        price: 175000,
        imgProduct: 'product-zx7-speaker',
        imgDescriptionOne: 'product-zx7-speaker-image-gallery-1',
        imgDescriptionTwo: 'product-zx7-speaker-image-gallery-2',
        imgDescriptionThree: 'product-zx7-speaker-image-gallery-3',
        description: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        features: [{
          title: 'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.'
        }, {
          title: 'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
        }],
        inTheBox: [{
            total: 2,
            title: 'Speaker unit'
          },
          {
            total: 2,
            title: 'Speaker cloth panel'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          },
          {
            total: 1,
            title: '10m optical cable'
          }
        ]
      },
      {
        productId: 6,
        category: 'earphones',
        status: 'NEW PRODUCT',
        name: 'YX1 WIRELESS ',
        price: 175000,
        imgProduct: 'product-yx1-earphones',
        imgDescriptionOne: 'product-yx1-earphones-image-gallery-1',
        imgDescriptionTwo: 'product-yx1-earphones-image-gallery-2',
        imgDescriptionThree: 'product-yx1-earphones-image-gallery-3',
        description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        features: [{
          title: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'
        }, {
          title: 'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
        }],
        inTheBox: [{
            total: 2,
            title: 'Speaker unit'
          },
          {
            total: 2,
            title: 'Speaker cloth panel'
          },
          {
            total: 1,
            title: 'User manual'
          },
          {
            total: 1,
            title: '3.5mm 5m audio cable'
          },
          {
            total: 1,
            title: '10m optical cable'
          }
        ]
      },
    ],
    currentProductArray: null,
    carts: [

    ],
    total: 0,
    cartProductExists: false
  },
  getters: {
    productAlsoLike(state) {
      return state.products.slice(0, 3).map(function () {
        let data = this.splice(Math.floor(Math.random() * this.length), 1)[0]
        if (data.productId !== state.currentProductArray[0].productId) return data;
      }, state.products.slice());
    },
    filteredHeadphones(state) {
      return state.products.filter(product => product.category === 'headphones')
    },
    filteredSpeakers(state) {
      return state.products.filter(product => product.category === 'speakers')
    },
    filteredEarphones(state) {
      return state.products.filter(product => product.category === 'earphones')
    },
  },
  mutations: {
    SET_CURRENT_PRODUCT(state, payload) {
      state.currentProductArray = state.products.filter(product => {
        return product.productId == payload
      })
    },
    SET_CART_PRODUCT(state, payload) {
      state.carts.map(product => {
        if (product.productId == payload.productId) {
          product.qty += payload.qty
          this.cartProductExists = true;
        }

      })

      if (!this.cartProductExists) state.carts.push(payload);
      updateLocalStotage(state.carts)
    },
    REMOVE_FROM_CART(state) {
      state.carts = []
      updateLocalStotage(state.carts)
    },
    UPDATE_CART_FROM_LOCAL_STORAGE(state) {
      const cart = localStorage.getItem('carts');
      if (cart) {
        state.carts = JSON.parse(cart)
      }
    },
    onMinusItemCart(state, payload) {
      const item = state.carts.find(product => product.productId == payload)
      if (item) {
        if (item.qty > 1) {
          item.qty--
        } else {
          state.carts = state.carts.filter(product => product.productId !== payload)
        }
        updateLocalStotage(state.carts)
      }

    },
    onPlusItemCart(state, payload) {
      const item = state.carts.find(product => product.productId == payload)
      item.qty++
      updateLocalStotage(state.carts)
    }

  },
  actions: {},
  modules: {}
})