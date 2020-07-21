<template>
  <div class="home">
    <Header title="一小时达" />
    <MainContent>
      <GoodsNav
        :list="goodsNavList"
        :defaultActive="activeId"
        k="id"
        @changeItem="onNavItemClick"
      />
      <GoodsList />
    </MainContent>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import GoodsNav from "../components/home/GoodsNav";
import GoodsList from "../components/home/GoodsList";

export default {
  name: "Home",
  components: {
    Header,
    MainContent,
    GoodsNav,
    GoodsList
  },
  data() {
    return {
      goodsNavList: [
        {id: "0", name: "所有"},
        {id: "1", name: "水果"},
        {id: "2", name: "蔬菜"},
        {id: "3", name: "肉蛋"},
        {id: "4", name: "速冻"},
        {id: "5", name: "酒饮"},
        {id: "6", name: "乳品"},
        {id: "7", name: "零食"},
      ],
      activeId: "0"
    }
  },
  methods: {
    onNavItemClick(k) {
      this.activeId = k;
    }
  }
};
</script>
