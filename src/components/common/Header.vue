<template>
  <header class="header">
    <div class="title">{{ title }}</div>
    <div class="back iconfont" @click="onBackClick" v-if="showBack">
      &#xe60f;
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "我是标题"
    },
    to: {
      type: String,
      default: ""
    }
  },
  methods: {
    onBackClick() {
      if(this.to) {
        this.$router.push(this.to);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
@import "../../assets/iconfont/iconfont.css";
.header {
  width: 100vw;
  height: px2rem(48);
  border-bottom: 1px solid $border-color;
  font-size: px2rem(16);
  font-weight: bold;
  @include center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: px2rem(48);
    height: px2rem(48);
    line-height: px2rem(48);
    text-align: center;
  }
}
</style>
