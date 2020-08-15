<template>
  <div class="home">
    <Header title="一小时达" />
    <MainContent>
      <GoodsNav
        :list="goodsNavList"
        :defaultActive="activeItem"
        @changeItem="onNavItemClick"
      />
      <GoodsList :goodsList="goodsList" />
    </MainContent>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import GoodsNav from "../components/home/GoodsNav";
import GoodsList from "../components/home/GoodsList";
import { getHomeData } from "../api/index.js";

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
      goodsNavList: [],
      goodsList: [],
      allGoods: [],
      activeItem: "所有"
    };
  },
  methods: {
    onNavItemClick(item) {
      this.activeItem = item;
      if (item === "所有") {
        this.goodsList = this.allGoods;
      } else {
        this.goodsList = this.allGoods.filter(goods => {
          return goods.type === item;
        });
      }
    }
  },
  mounted() {
    getHomeData().then(res => {
      if (res.code === 1) {
        this.allGoods = this.goodsList = res.result.goodsList;
        this.goodsNavList = res.result.goodsTypeList;
        this.goodsNavList.unshift("所有");
      }
    });
  }
};
</script>
