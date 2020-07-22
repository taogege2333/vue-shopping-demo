<template>
  <div class="detail">
    <Header title="商品详情" showBack />
    <MainContent bottom="62">
      <div class="detail-image">
        <img :src="detail.image" :alt="detail.name">
      </div>
      <div class="detail-card">
        <p class="detail-card-name">{{detail.name}}</p>
        <p class="detail-card-money">
          <span>￥</span>
          <span class="number">{{detail.price || 0 | formatPrice}}</span>
        </p>
      </div>
      <div class="detail-introduce">{{detail.introduce}}</div>
    </MainContent>
    <div class="detail-bottom">
      <div class="detail-bottom-cart iconfont">&#xe61d;</div>
      <div class="detail-bottom-add">加入购物车</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import { commonMixin } from "../mixins/index";
import { getDetail } from "../api/index.js";

export default {
  mixins: [commonMixin],
  components: {
    Header,
    MainContent
  },
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    const id = this.$route.query.id;
    getDetail(id).then(res => {
      if(res.code === 1) {
        this.detail = res.result;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.detail {
  .detail-image {
    @include center;
  }
  .detail-card {
    margin: 0 px2rem(10);
    padding: px2rem(20) 0;
    border: 1px solid $border-color;
    .detail-card-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: px2rem(20);
      font-weight: bold;
      margin-bottom: px2rem(15);
    }
    .detail-card-money {
      font-size: px2rem(16);
      @include center;
      .number {
        color: $color-pink;
      }
    }
  }
  .detail-introduce {
    margin: px2rem(20) px2rem(10) 0;
    padding: px2rem(15);
    border: 1px solid $border-color;
    font-size: px2rem(16);
    line-height: px2rem(24);
    text-indent: px2rem(32);
  }
  .detail-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 600;
    width: 100vw;
    height: px2rem(61);
    background-color: #fff;
    border-top: 1px solid $border-color;
    display: flex;
    .detail-bottom-cart {
      width: px2rem(75);
      flex-basis: px2rem(75);
      font-size: px2rem(26);
      @include center;
    }
    .detail-bottom-add {
      flex: 1;
      background-color: $color-pink;
      color: #fff;
      font-size: px2rem(18);
      @include center;
    }
  }
}
</style>
