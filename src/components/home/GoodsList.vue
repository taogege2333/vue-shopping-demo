<template>
  <ul class="goods-list">
    <li class="goods-list-item" v-for="item in [0, 1, 2, 3, 4]" :key="item">
      <div class="left">
        <img src="/image/水果.png" alt="水果">
      </div>
      <div class="right">
        <p class="right-name">水果1</p>
        <p class="right-introduce">我是水果1的介绍</p>
        <p class="right-money">
          ￥
          <span class="right-money-num">12.00</span>
        </p>
        <span class="add-cart-btn iconfont">&#xe61d;</span>
        <div class="add-cart-number" v-if="false">
          <div class="iconfont">&#xe664;</div>
          <div class="number">3</div>
          <div class="iconfont">&#xe620;</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.goods-list {
  padding-top: px2rem(45);
  .goods-list-item {
    display: flex;
    border-bottom: 1px solid $border-color;
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
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: px2rem(14);
      line-height: px2rem(28);
      padding-left: px2rem(10);
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
}
</style>
