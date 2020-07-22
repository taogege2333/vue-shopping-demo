<template>
  <main class="content-wrapper" :style="{paddingTop: pxToRem(top), paddingBottom: pxToRem(bottom)}">
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
    }
  },
  mixins: [commonMixin]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.content-wrapper {
  padding: px2rem(49) 0 px2rem(60);
}
</style>
