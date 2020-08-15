<template>
  <div class="price">
    <p class="row">
      <span class="left">商品总价:</span>
      <span class="right">￥{{ totalPrice | formatPrice }}</span>
    </p>
    <p class="row">
      <span class="left">运费(满{{ freightLimit }}免邮):</span>
      <span class="right">￥{{ freightMoney | formatPrice }}</span>
    </p>
    <p class="row">
      <span class="left">合计:</span>
      <span class="right">￥{{ payment | formatPrice }}</span>
    </p>
  </div>
</template>

<script>
import { commonMixin } from "../../mixins/index";
import { FREIGHT_LIMIT } from "../../utils/static";

export default {
  mixins: [commonMixin],
  data() {
    return {
      freightLimit: FREIGHT_LIMIT
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.price {
  margin-top: px2rem(10);
  padding: px2rem(10);
  font-size: px2rem(14);
  background-color: #fff;
  .row {
    display: flex;
    justify-content: space-between;
    padding: px2rem(16) 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
