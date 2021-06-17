import {
  createStore
} from 'vuex'

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
        id: 1,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX99 MARK I HEADPHONES',
        price: '1,750.00',

        imgProduct: 'product-xx99-mark-one-headphones',
        imgDescription: [{
          photo: 'product-xx99-mark-one-headphones-image-gallery-1'
        }, {
          photo: 'product-xx99-mark-one-headphones-image-gallery-2'
        }, {
          photo: 'product-xx99-mark-one-headphones-image-gallery-3'
        }],
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        features: [{
          title: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.'
        }, {
          title: 'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'
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
          },
          {
            total: 1,
            title: 'Travel bag'
          }
        ]
      },
      {
        id: 2,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX99 MARK II HEADPHONES',
        price: '2,999.00',
        imgProduct: 'image-xx99-mark-two',
        imgDescription: [{
          photo: 'image-xx99-mark-two-image-gallery-1'
        }, {
          photo: 'image-xx99-mark-two-image-gallery-2'
        }, {
          photo: 'image-xx99-mark-two-image-gallery-3'
        }],
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
      }, {
        id: 3,
        category: 'headphones',
        status: 'NEW PRODUCT',
        name: 'XX59 HEADPHONES',
        price: '899.00',
        imgProduct: 'product-xx59-headphones',
        imgDescription: [{
          photo: 'product-xx59-headphones-image-gallery-1'
        }, {
          photo: 'product-xx59-headphones-image-gallery-2'
        }, {
          photo: 'product-xx59-headphones-image-gallery-3'
        }],
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
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})