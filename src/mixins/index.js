import { mapGetters, mapActions } from "vuex";
import { FREIGHT_LIMIT, FREIGHT_MONEY } from "../utils/static";

export const commonMixin = {
  filters: {
    formatPrice(price) {
      return price.toFixed(2);
    }
  },
  methods: {
    ...mapActions(["addGoods", "reduceGoods", "setUser"]),
    pxToRem(px) {
      return (parseInt(px) / 100) + "rem";
    }
  },
  computed: {
    ...mapGetters(["cart", "user"]),
    getAllGoodsNumInCart() {
      let num = 0;
      for(let item of this.cart) {
        num += item.num;
      }
      return num;
    },
    totalPrice() {
      let price = 0;
      for(let goods of this.cart) {
        price += goods.price * goods.num;
      }
      return price;
    },
    freightMoney() {
      if(this.totalPrice >= FREIGHT_LIMIT) {
        return 0;
      } else {
        return FREIGHT_MONEY;
      }
    },
    payment() {
      return this.totalPrice + this.freightMoney;
    }
  }
}