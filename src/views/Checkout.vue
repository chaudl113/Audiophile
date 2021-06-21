<template>
  <div class="container">
    <a href="/" class="back">Go back</a>
    <form @submit.prevent="submitForm" class="checkout flex">
      <div class="from-checkout">
        <h4>CHECKOUT</h4>
        <h5>BILLING DETAILS</h5>
        <div class="billing__details flex">
          <div class="name">
            <label for="">Name </label>
            <input required type="text" v-model="name" />
          </div>
          <div class="email">
            <label for="">Email Adress </label>
            <input required type="email" v-model="email" />
          </div>
          <div class="phone">
            <label for="">Phone Number </label>
            <input required type="text" v-model="phone" />
          </div>
        </div>

        <h5>SHIPPING DETAILS</h5>
        <div class="shipping__details flex">
          <div class="Adress">
            <label for="">Your Adress </label>
            <input required type="text" v-model="adress" />
          </div>
          <div class="zipcode">
            <label for="">ZIP Code </label>
            <input required type="text" v-model="zipCode" />
          </div>
          <div class="city">
            <label for=""> City </label>
            <input required type="text" v-model="city" />
          </div>
          <div class="country">
            <label for=""> Country </label>
            <input required type="text" v-model="coutry" />
          </div>
        </div>
        <h5>PAYMENT DETAILS</h5>
        <div class="payment__details flex">
          <p>Payment method</p>
          <div class="from-check-payment">
            <div class="money">
              <label class="label__money"
                ><input
                  class="radio"
                  type="radio"
                  value="e-Money"
                  checked=""
                  v-model="paymentType"
                />

                e-Money</label
              >
            </div>
            <div class="delivery">
              <label class="label__delivery"
                ><input
                  class="radio"
                  type="radio"
                  value="delivery"
                  v-model="paymentType"
                />

                Cash on Delivery</label
              >
            </div>
          </div>
        </div>

        <div v-if="paymentType == 'e-Money'" class="emoney__details mb-10 flex">
          <div class="number">
            <label for="">E-Money Number </label>
            <input required type="text" v-model="numberEMoney" />
          </div>
          <div class="pin">
            <label for="">E-Money PIN </label>
            <input required type="text" v-model="PinEMoney" />
          </div>
        </div>
        <div class="delivery__details flex mb-10" v-else>
          <img src="../assets/image/Shape.png" alt="" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      </div>
      <div class="summary">
        <h5>SUMMARY</h5>
        <div class="items flex flex-column">
          <item-checkout
            v-for="(item, index) in carts"
            :key="index"
            :item="item"
          />
        </div>

        <div class="total flex">
          <div class="text">Total</div>
          <p>
            {{
              total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
        </div>
        <div class="ship flex">
          <div class="text">Shipping</div>
          <p>
            {{
              ship.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
        </div>
        <div class="vat flex">
          <div class="text">VAT (INCLUDED)</div>
          <p>
            {{
              vat.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
        </div>
        <div class="grand flex">
          <div class="text">GRAND TOTAL</div>
          <p>
            {{
              grand.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
        </div>
        <button type="submit" class="orange-button">Continue & Pay</button>
      </div>
    </form>
    <modal-order v-if="modalOrder" :carts="carts" :grand="grand" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemCheckout from "../components/ItemCheckout.vue";
import ModalOrder from "../components/ModalOrder.vue";

export default {
  components: {
    ItemCheckout,
    ModalOrder,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      adress: "",
      zipCode: null,
      city: null,
      coutry: null,
      paymentType: "e-Money",
      numberEMoney: null,
      PinEMoney: null,
      ship: 50,
      modalOrder: false,
    };
  },
  computed: {
    ...mapState(["carts"]),
    total() {
      let total = 0;
      this.carts.map((i) => {
        total += i.qty * parseInt(i.price);
      });
      return total;
    },
    vat() {
      return this.total / 5;
    },
    grand() {
      return this.total + this.ship;
    },
  },
  methods: {
    submitForm() {
      this.modalOrder = !this.modalOrder;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  color: #000;
  position: relative;
  .back {
    display: inline-block;
    font-weight: 500;
    color: #000;
    font-size: 14px;
    padding: 80px 0 50px 0;
    opacity: 0.5;
    text-decoration: none;
    cursor: pointer;
  }
  .checkout {
    gap: 2rem;
    .from-checkout {
      padding: 3rem;
      flex: 4;

      display: flex;
      flex-direction: column;
      background-color: hsl(0, 0%, 100%);
      gap: 2rem;
      h4 {
        text-transform: uppercase;
        font-size: 28px;
        letter-spacing: 1px;
      }
      .billing__details {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem 1rem;

        .name,
        .email,
        .phone {
          display: flex;
          flex-direction: column;
          flex: 0 1 19.1rem;
          label {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: capitalize;
            .error {
              display: none;
            }
          }
          input {
            font-weight: bold;
            font-size: 0.8125rem;
            padding: 1.125rem 1.5rem;
            border: 1px solid hsl(0, 0%, 81%);
            border-radius: 0.5rem;
            outline: none;
          }
        }
      }
      .shipping__details {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem 1rem;
        div:first-child {
          flex-basis: 100%;
        }
        div {
          display: flex;
          flex-direction: column;
          flex: 0 1 19.1rem;
          label {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: capitalize;
            .error {
              display: none;
            }
          }
          input {
            font-weight: bold;
            font-size: 0.8125rem;
            padding: 1.125rem 1.5rem;
            border: 1px solid hsl(0, 0%, 81%);
            border-radius: 0.5rem;
            outline: none;
          }
        }
      }

      .payment__details {
        justify-content: space-between;
        p {
          font-size: 0.75rem;
          font-weight: bold;
        }
        .from-check-payment {
          gap: 20px;
          display: flex;
          flex-direction: column;
          .money,
          .delivery {
            width: 19.6rem;
            .label__money,
            .label__delivery {
              display: flex;
              font-weight: bold;
              width: 100%;
              -webkit-box-align: center;
              align-items: center;
              gap: 1rem;
              padding: 1.25rem 1.5rem;
              border: 1px solid hsl(0, 0%, 81%);
              border-radius: 0.5rem;
              cursor: pointer;
              input[type="radio"] {
                -webkit-appearance: none;
                width: 20px;
                height: 20px;
                border: 1px solid darkgray;
                border-radius: 50%;
                outline: none;
                box-shadow: 0 0 5px 0px gray inset;
              }
              input[type="radio"] {
                &:hover {
                  box-shadow: 0 0 5px 0px orange inset;
                }
                &:before {
                  content: "";
                  display: block;
                  width: 60%;
                  height: 60%;
                  margin: 20% auto;
                  border-radius: 50%;
                }
                &:checked:before {
                  background: hsl(22, 65%, 57%);
                }
              }
            }
          }
        }
      }

      .emoney__details {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem 1rem;
        .number,
        .pin {
          display: flex;
          flex-direction: column;
          flex: 0 1 19.1rem;
          label {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: capitalize;
          }
          input {
            font-weight: bold;
            font-size: 0.8125rem;
            padding: 1.125rem 1.5rem;
            border: 1px solid #cfcfcf;
            border-radius: 0.5rem;
            outline: none;
          }
        }
      }
      .delivery__details {
        img {
          padding: 10px;
        }
        p {
          opacity: 0.5;
          font-weight: 500;
        }
      }
    }
    .summary {
      flex: 2;
      padding: 2rem;
      width: 100%;
      max-width: 22rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: hsl(0, 0%, 100%);
      h5 {
        font-size: 20px;
      }

      .total,
      .ship,
      .vat,
      .grand {
        justify-content: space-between;
        .text {
          font-weight: 500;
          opacity: 0.5;
        }
        p {
          font-weight: 900;
        }
      }
    }
  }
}
</style>