<template>
  <input
    class="my-input"
    :class="isWarning ? 'warning' : ''"
    :value="value"
    @input="$event => $emit('input', $event.target.value)"
    @blur="blurEventFunc"
    :type="password ? 'password' : ''"
  />
</template>

<script>
export default {
  props: {
    value: String,
    password: {
      type: Boolean,
      default: false
    },
    isWarning: {
      type: Boolean,
      default: false
    },
    blurEventFunc: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.my-input {
  width: 100%;
  height: px2rem(40);
  padding: 0;
  outline: none;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  padding: 0 px2rem(14);
  border-radius: px2rem(4);
  font-size: px2rem(16);
  &:focus {
    border-color: #409eff;
  }
  &.warning {
    border-color: #f56c6c;
  }
}
</style>
