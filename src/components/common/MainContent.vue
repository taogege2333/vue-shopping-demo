<template>
  <main class="content-wrapper">
    <slot />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.content-wrapper {
  padding: px2rem(49) 0 px2rem(60);
}
</style>
