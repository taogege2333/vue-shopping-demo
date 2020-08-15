<template>
  <div class="goods-item" @click="handleItemClick">
    <div class="left">
      <img :src="item.image" :alt="item.name" />
    </div>
    <div class="right">
      <p class="right-name">{{ item.name }}</p>
      <p class="right-introduce">{{ item.introduce }}</p>
      <p class="right-money">
        ￥
        <span class="right-money-num">{{ item.price | formatPrice }}</span>
      </p>
      <span
        class="add-cart-btn iconfont"
        @click.stop="handleAddGoods(item)"
        v-show="getGoodsNumInCart(item) <= 0"
      >
        &#xe61d;
      </span>
      <div class="add-cart-number" v-show="getGoodsNumInCart(item) > 0">
        <div class="iconfont" @click.stop="handleReduceGoods(item.id)">
          &#xe664;
        </div>
        <div class="number">{{ getGoodsNumInCart(item) }}</div>
        <div class="iconfont" @click.stop="handleAddGoods(item)">&#xe620;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { commonMixin } from "../../mixins/index";

export default {
  mixins: [commonMixin],
  props: {
    item: Object
  },
  methods: {
    handleAddGoods(item) {
      this.addGoods(item);
    },
    handleReduceGoods(id) {
      this.reduceGoods(id);
    },
    handleItemClick() {
      this.$emit("itemClick");
    }
  },
  computed: {
    getGoodsNumInCart() {
      return function(item) {
        let num = 0;
        this.cart.forEach(goods => {
          if (goods.id === item.id) {
            num = goods.num;
          }
        });
        return num;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.goods-item {
  display: flex;
  border-bottom: 1px solid $border-color;
  background-color: #fff;
  .left {
    width: px2rem(150);
    height: px2rem(130);
    @include center;
    img {
      width: px2rem(100);
      height: px2rem(100);
    }
  }
  .right {
    overflow: hidden;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: px2rem(14);
    line-height: px2rem(28);
    // padding-left: px2rem(10);
    padding-right: px2rem(70);
    position: relative;
    .right-name {
      font-size: px2rem(18);
      font-weight: bold;
    }
    .right-introduce {
      @include ellipsis;
    }
    .right-money {
      .right-money-num {
        font-size: px2rem(16);
        color: $color-pink;
        font-weight: bold;
      }
    }
    .add-cart-btn {
      position: absolute;
      bottom: px2rem(10);
      right: px2rem(20);
      width: px2rem(46);
      height: px2rem(46);
      border-radius: px2rem(23);
      background-color: $color-pink;
      color: #fff;
      font-size: px2rem(26);
      font-weight: bold;
      @include center;
    }
    .add-cart-number {
      position: absolute;
      bottom: px2rem(10);
      right: px2rem(20);
      @include center;
      color: $color-pink;
      font-size: px2rem(16);
      .number {
        margin: 0 px2rem(10);
        color: #000;
      }
    }
  }
}
</style>
