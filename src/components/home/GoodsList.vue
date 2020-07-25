<template>
  <div class="goods-list">
    <GoodsItem
      v-for="item in goodsList"
      :key="item.id"
      :item="item"
      @itemClick="goDetail(item.id)"
    />
    <p class="bottom">没有更多商品啦，敬请期待！！！</p>
  </div>
</template>

<script>
import GoodsItem from "../common/GoodsItem";

export default {
  props: {
    goodsList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GoodsItem
  },
  methods: {
    goDetail(id) {
      this.$router.push({path: "/detail", query: {id}});
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.goods-list {
  padding-top: px2rem(45);
  .bottom {
    font-size: px2rem(14);
    padding: px2rem(20) 0;
    @include center;
  }
}
</style>
