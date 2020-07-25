<template>
  <div class="mine">
    <Header title="我的信息" />
    <MainContent center>
      <MyButton
        class="login-btn"
        v-bind="{text: '登录', bgColor: '#67c23a', color: '#fff', btnClickFunc: goLogin}"
        v-if="!user.username"
      />
      <User v-else />
    </MainContent>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import MyButton from "../components/common/MyButton";
import User from "../components/mine/User";
import { commonMixin } from "../mixins/index";

export default {
  mixins: [commonMixin],
  components: {
    Header,
    MainContent,
    MyButton,
    User
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.mine {
  .login-btn {}
}
</style>
