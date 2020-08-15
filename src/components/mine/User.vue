<template>
  <div class="user">
    <div class="user-header">当前用户: {{ this.user.username }}</div>
    <div class="user-body">
      <router-link to="/address" class="user-body-item">
        <span>我的地址</span>
        <span class="iconfont">&#xe601;</span>
      </router-link>
    </div>
    <MyButton
      class="user-exit"
      v-bind="{
        text: '退出登录',
        color: '#fff',
        bgColor: '#f56c6c',
        btnClickFunc: handleExit
      }"
    />
  </div>
</template>

<script>
import MyButton from "../common/MyButton";
import { commonMixin } from "../../mixins/index";

export default {
  mixins: [commonMixin],
  components: {
    MyButton
  },
  methods: {
    handleExit() {
      this.setUser({});
      localStorage.removeItem("user");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.user {
  width: 100%;
  @include center;
  flex-direction: column;
  .user-header {
    margin-bottom: px2rem(14);
    font-size: px2rem(18);
    font-weight: bold;
  }
  .user-body {
    width: 100%;
    margin-bottom: px2rem(14);
    font-size: px2rem(16);
    .user-body-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #dcdfe6;
      padding: px2rem(10);
      color: #333;
      &:last-child {
        border-bottom: 1px solid #dcdfe6;
      }
    }
  }
  .user-exit {
    width: 100%;
  }
}
</style>
