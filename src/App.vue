<template>
  <div id="app">
    <router-view />
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
</style>
