import { mapGetters, mapActions } from "vuex";
import { FREIGHT_LIMIT, FREIGHT_MONEY } from "../utils/static";

export const commonMixin = {
  filters: {
    formatPrice(price) {
      return price.toFixed(2);
    }
  },
  methods: {
    ...mapActions(["addGoods", "reduceGoods", "setUser", "clearCart"]),
    // 将设计稿的px转换成rem
    pxToRem(px) {
      return parseInt(px) / 100 + "rem";
    }
  },
  computed: {
    ...mapGetters(["cart", "user"]),
    // 获取在购物车中所有商品的数量
    getAllGoodsNumInCart() {
      let num = 0;
      for (let item of this.cart) {
        num += item.num;
      }
      return num;
    },
    // 购物车中商品总价
    totalPrice() {
      let price = 0;
      for (let goods of this.cart) {
        price += goods.price * goods.num;
      }
      return price;
    },
    // 计算运费
    freightMoney() {
      if (this.totalPrice >= FREIGHT_LIMIT) {
        return 0;
      } else {
        return FREIGHT_MONEY;
      }
    },
    // 计算应支付的金额
    payment() {
      return this.totalPrice + this.freightMoney;
    }
  }
};
