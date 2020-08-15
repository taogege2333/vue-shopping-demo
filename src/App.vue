<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from "./components/common/TabBar";
import { commonMixin } from "./mixins/index.js";

export default {
  mixins: [commonMixin],
  components: {
    TabBar
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.id) {
      this.setUser(user);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
body {
  font-size: px2rem(14);
  color: #333;
}
</style>
