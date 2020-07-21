<template>
  <header class="header">
    <div class="title">{{title}}</div>
    <div
      class="back iconfont"
      @click="onBackClick"
      v-if="showBack"
    >
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
    }
  },
  methods: {
    onBackClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
@import "../../assets/iconfont/iconfont.css";
.header {
  width: 100%;
  height: px2rem(48);
  border-bottom: 1px solid $border-color;
  font-size: px2rem(20);
  @include center;
  position: relative;
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
