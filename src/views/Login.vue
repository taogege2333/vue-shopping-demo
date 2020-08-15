<template>
  <div class="login">
    <Header title="登录界面" showBack to="/mine" />
    <div class="login-wrapper">
      <div class="login-form">
        <MyInput class="login-input" v-model.trim="username" />
        <MyInput class="login-input" v-model.trim="password" password />
        <div class="btns">
          <MyButton
            class="btns-item"
            v-bind="{
              text: '登录',
              bgColor: '#67c23a',
              color: '#fff',
              btnClickFunc: handleLogin
            }"
          />
          <MyButton class="btns-item" text="注册" border />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MyInput from "../components/common/MyInput";
import MyButton from "../components/common/MyButton";
import { login } from "../api/index.js";
import { commonMixin } from "../mixins/index";

export default {
  mixins: [commonMixin],
  components: {
    Header,
    MyInput,
    MyButton
  },
  data() {
    return {
      username: "王小明",
      password: "123456"
    };
  },
  methods: {
    handleLogin() {
      login(this.username, this.password).then(res => {
        if (res.code === 1) {
          this.setUser(res.result);
          localStorage.setItem('user', JSON.stringify(res.result));
          this.$router.push("/mine");
        } else {
          alert(res.result);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.login {
  .login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 600;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #fff;
    @include center;
    .login-form {
      width: 100%;
      padding: 0 px2rem(50);
      .login-input {
        margin-bottom: px2rem(20);
      }
      .btns {
        display: flex;
        @include center;
        .btns-item + .btns-item {
          margin-left: px2rem(10);
        }
      }
    }
  }
}
</style>
