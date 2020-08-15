<template>
  <main
    class="content-wrapper"
    :class="center ? 'center' : ''"
    :style="{
      paddingTop: pxToRem(top),
      paddingBottom: pxToRem(bottom),
      backgroundColor: bgColor,
      zIndex
    }"
  >
    <slot />
  </main>
</template>

<script>
import { commonMixin } from "../../mixins/index";

export default {
  props: {
    top: {
      type: [String, Number],
      default: "49"
    },
    bottom: {
      type: [String, Number],
      default: "60"
    },
    center: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    },
    zIndex: {
      type: [String, Number],
      default: ""
    }
  },
  mixins: [commonMixin]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.content-wrapper {
  min-height: 100vh;
  padding: px2rem(49) 0 px2rem(60);
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  &.center {
    @include center;
  }
}
</style>
