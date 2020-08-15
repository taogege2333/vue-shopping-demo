<template>
  <div class="cart">
    <Header title="我的购物车" />
    <MainContent bottom="114" :center="this.cart.length === 0">
      <p class="tips" v-if="this.cart.length === 0">你还没有添加任何商品哦~</p>
      <div class="wrapper" v-else>
        <div class="goods-wrapper">
          <GoodsItem v-for="item in this.cart" :key="item.id" :item="item" />
        </div>
        <Price />
        <div class="bottom">
          <div class="settle">去结算</div>
        </div>
      </div>
    </MainContent>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import GoodsItem from "../components/common/GoodsItem";
import Price from "../components/cart/Price";
import { commonMixin } from "../mixins/index";

export default {
  components: {
    Header,
    MainContent,
    GoodsItem,
    Price
  },
  mixins: [commonMixin]
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.cart {
  .tips {
    font-size: px2rem(14);
    @include center;
  }
  .wrapper {
    padding-top: px2rem(10);
    background-color: #eee;
    .goods-wrapper {
      // margin-top: px2rem(10);
    }
  }
  .bottom {
    width: 100%;
    height: px2rem(44);
    position: fixed;
    bottom: px2rem(60);
    z-index: 600;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    background-color: #fff;
    .settle {
      float: right;
      width: px2rem(100);
      line-height: px2rem(44);
      text-align: center;
      background-color: $color-pink;
      color: #fff;
    }
  }
}
</style>
