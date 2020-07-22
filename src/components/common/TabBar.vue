<template>
  <nav class="tabbar">
    <ul class="tabbar-list">
      <li
        class="tabbar-list-item"
        :class="activeIndex === index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="item.path"
      >
        <router-link :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          {{item.text}}
          <i class="label" v-show="item.text === '购物车'">6</i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {path: "/", text: "首页", icon: "&#xe615;"},
        {path: "/cart", text: "购物车", icon: "&#xe674;"},
        {path: "/mine", text: "我的", icon: "&#xe718;"}
      ],
      activeIndex: 0
    }
  },
  watch: {
    "$route"(newRoute) {
      switch(newRoute.path) {
        case "/" :
          this.activeIndex = 0;
          break;
        case "/cart" :
          this.activeIndex = 1;
          break;
        case "/mine" :
          this.activeIndex = 2;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
@import "../../assets/iconfont/iconfont.css";
.tabbar {
  width: 100vw;
  height: px2rem(60);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  box-shadow: 0 0 6px 1px rgba(200, 200, 200, .5);
  background-color: #fff;
  .tabbar-list {
    width: 100%;
    height: 100%;
    display: flex;
    .tabbar-list-item {
      flex-grow: 1;
      height: 100%;
      position: relative;
      .label {
        position: absolute;
        top: 0;
        right: px2rem(40);
        width: px2rem(24);
        height: px2rem(18);
        border-radius: px2rem(9);
        background-color: $color-pink;
        color: #fff;
        @include center;
      }
      a {
        width: 100%;
        height: 100%;
        @include center;
        flex-direction: column;
        justify-content: space-around;
        font-size: px2rem(14);
        color: #ababab;
        .iconfont {
          font-size: px2rem(24);
        }
      }
      &.active {
        a {
          color: $color-pink;
        }
      }
    }
  }
}
</style>
