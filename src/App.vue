<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import TabBar from './components/common/TabBar';

export default {
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
body {
  font-size: px2rem(14);
  color: #333;
}
</style>
