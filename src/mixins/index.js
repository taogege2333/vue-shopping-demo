import { mapState, mapActions } from "vuex";

export const commonMixin = {
  filters: {
    formatPrice(price) {
      return price.toFixed(2);
    }
  },
  methods: {
    ...mapActions(["addGoods", "reduceGoods"]),
    pxToRem(px) {
      return (parseInt(px) / 100) + "rem";
    }
  },
  computed: {
    ...mapState(["cart"])
  }
}