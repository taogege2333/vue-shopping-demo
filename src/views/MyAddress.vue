<template>
  <div class="my-address">
    <Header title="我的收货地址" showBack to="/mine" />
    <MainContent bgColor="#f5f5f5" zIndex="600">
      <div class="address-list">
        <AddressItem v-for="item in addressList" :key="item.id" :addressInfo="item" />
      </div>
    </MainContent>
    <div class="add-address">
      <MyButton
        class="btn"
        v-bind="{
          text: '新增收获地址',
          bgColor: '#ff65af',
          color: '#fff',
          btnClickFunc: goAddAddress
        }"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import AddressItem from "../components/my-address/AddressItem";
import MyButton from "../components/common/MyButton";
import { getAddressList } from "../api/index";

export default {
  components: {
    Header,
    MainContent,
    AddressItem,
    MyButton
  },
  data() {
    return {
      addressList: []
    }
  },
  methods: {
    goAddAddress() {
      this.$router.push("/address/add");
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
.my-address {
  .address-list {
    margin-top: px2rem(10);
  }
  .add-address {
    position: fixed;
    bottom: 0;
    z-index: 600;
    width: 100%;
    height: px2rem(60);
    background-color: #fff;
    box-shadow: 0 0 2px 1px #dedede;
    @include center;
    .btn {
      width: 80%;
    }
  }
}
</style>
