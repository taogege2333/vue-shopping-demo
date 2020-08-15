<template>
  <button class="my-btn" :style="style" @click="btnClickFunc">
    {{ text }}
  </button>
</template>

<script>
import { realPx } from "../../utils/utils";

export default {
  props: {
    text: {
      type: String,
      default: "button"
    },
    fontSize: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: "#000"
    },
    border: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    btnClickFunc: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      style: {}
    };
  },
  methods: {
    propStyle() {
      return {
        fontSize: realPx(this.fontSize) + "px",
        color: this.color,
        backgroundColor: this.bgColor,
        border: this.border ? "1px solid #cdcdcd" : "none"
      };
    },
    onResize() {
      this.style = this.propStyle();
    }
  },
  mounted() {
    this.style = this.propStyle();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.my-btn {
  outline: none;
  height: px2rem(40);
  padding: 0 px2rem(20);
  // border: 1px solid #cdcdcd;
  border-radius: px2rem(4);
  // background-color: #fff;
  // font-size: px2rem(16);
}
</style>
