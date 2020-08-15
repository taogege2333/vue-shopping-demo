<template>
  <div class="settlement">
    <Header title="填写订单" showBack to="/cart" />
    <MainContent bgColor="#f5f5f5" zIndex="600">
      <div class="goods-list">
        <div class="goods-item" v-for="item in cart" :key="item.id">
          <img class="image" :src="item.image" :alt="item.name">
          <span class="number">{{item.num}}</span>
        </div>
      </div>
      <div class="total-price">
        <span class="label">合计:</span>
        <span class="money">￥{{payment}}</span>
      </div>
      <div class="address">
        <span class="label">地址:</span>
        <div class="select" @click="handleSwitchOption">{{addressList[currentIndex].receiver + addressList[currentIndex].phone + addressList[currentIndex].address}}</div>
        <i
          class="iconfont icon-arrow-right"
          :class="showOptions ? 'up' : 'down'"
          @click="handleSwitchOption"
        ></i>
        <div class="options" v-show="showOptions">
          <div
            class="options-item"
            :class="currentIndex === index ? 'selected' : ''"
            v-for="(item, index) in addressList"
            :key="item.id"
            @click="handleSelectOption(index)"
          >
            {{item.receiver + item.phone + item.address}}
          </div>
        </div>
      </div>
    </MainContent>
    <div class="payment">
      <div class="money">
        付款
        <span>￥96</span>
      </div>
      <button class="pay" @click="handleClickPay">
        去支付
        <i class="iconfont icon-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent"
import { commonMixin } from "../mixins/index.js";
import { getAddressList } from "../api/index";

export default {
  mixins: [commonMixin],
  components: {
    Header,
    MainContent
  },
  data() {
    return {
      addressList: [],
      currentIndex: 0,
      showOptions: false
    }
  },
  methods: {
    handleSelectOption(index) {
      this.currentIndex = index;
      this.showOptions = false;
    },
    handleSwitchOption() {
      this.showOptions = !this.showOptions;
    },
    handleClickPay() {
      this.clearCart();
      alert("支付成功");
      this.$router.push("/cart");
    }
  },
  mounted() {
    getAddressList().then(res => {
      if(res.code === 1) {
        this.addressList = res.result;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.settlement {
  .goods-list {
    background-color: #fff;
    padding: px2rem(10);
    margin-top: px2rem(10);
    .goods-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $border-color;
      .image {
        width: px2rem(40);
        height: px2rem(40);
      }
    }
  }
  .label {
    width: px2rem(60);
  }
  .total-price {
    background-color: #fff;
    padding: px2rem(10);
    margin-top: px2rem(10);
    display: flex;
    justify-content: space-between;
    font-size: px2rem(16);
    .money {
      color: $color-pink;
      font-weight: bold;
    }
  }
  .address {
    background-color: #fff;
    padding: px2rem(10);
    margin-top: px2rem(10);
    font-size: px2rem(16);
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .select {
      flex: 1;
      padding-right: px2rem(20);
      @include ellipsis;
    }
    .options {
      position: absolute;
      top: px2rem(36);
      left: 0;
      width: 100vw; 
      background-color: #fff;
      border-top: 1px solid $border-color;
      .options-item {
        padding: px2rem(10) px2rem(10);
        line-height: px2rem(20);
        border-bottom: 1px solid $border-color;
        &.selected {
          color: #409eff;
        }
      }
    }
    .iconfont {
      transition: all .3s;
      &.up {
        transform: rotateZ(-90deg);
      }
      &.down {
        transform: rotateZ(90deg);
      }
    }
  }
  .payment {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: px2rem(46);
    background-color: #fff;
    box-shadow: 0 0 2px 1px #dedede;
    display: flex;
    justify-content: space-between;
    .money {
      font-size: px2rem(18);
      line-height: px2rem(46);
      padding-left: px2rem(10);
      span {
        color: $color-pink;
        font-weight: bold;
      }
    }
    .pay {
      width: px2rem(100);
      height: 100%;
      background-color: #ff65af;
      outline: none;
      border: none;
      color: #fff;
      font-size: px2rem(16);
    }
  }
}
</style>
