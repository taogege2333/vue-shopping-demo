<template>
  <nav class="goods-nav">
    <ul class="goods-nav-list">
      <li
        class="nav-list-item"
        :class="defaultActive === key(item) ? 'active' : ''"
        v-for="item in list"
        :key="key(item)"
        @click="onItemClick(key(item))"
      >
        {{show(item)}}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    defaultActive: {
      type: [String, Number],
      required: true
    },
    k: {
      type: [String, Number],
    },
    s: {
      type: [String, Number],
    }
  },
  methods: {
    onItemClick(k) {
      this.$emit("changeItem", k);
    }
  },
  computed: {
    key() {
      return function (item) {
        return this.k ? item[this.k] : item;
      }
    },
    show() {
      return function (item) {
        return this.s ? item[this.s] : item;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.goods-nav {
  width: 100vw;
  height: px2rem(44);
  position: fixed;
  top: px2rem(48);
  left: 0;
  z-index: 500;
  padding: 0 px2rem(20);
  box-sizing: border-box;
  background-color: #f5f7fa;
  box-shadow: 0 1px 4px 0 #ccc;
  .goods-nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    font-size: px2rem(14);
    color: #ababab;
    .nav-list-item {
      height: 100%;
      padding: 0 px2rem(16);
      @include center;
      flex-shrink: 0;
      &.active {
        background-color: #fff;
        color: #409eff;
      }
    }
  }
}
</style>
