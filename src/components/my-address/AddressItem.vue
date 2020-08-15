<template>
  <div class="address-item">
    <div class="info">
      <p class="info-item">{{addressInfo.receiver}}</p>
      <p class="info-item">{{addressInfo.phone}}</p>
      <p class="info-item">{{addressInfo.address}}</p>
    </div>
    <div class="edit-wrapper">
      <router-link
        :to="{ name: 'editAddress', params: { id: addressInfo.id } }"
        class="edit"
        >编辑</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addressInfo: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
.address-item {
  display: flex;
  justify-content: space-between;
  padding: px2rem(10);
  background-color: #fff;
  & + .address-item {
    border-top: 1px solid $border-color;
  }
  .info {
    flex: 1;
    line-height: px2rem(24);
    overflow: hidden;
    .info-item {
      @include ellipsis;
    }
  }
  .edit-wrapper {
    flex-shrink: 0;
    margin: 0 px2rem(10);
    @include center;
    .edit {
      color: #409eff;
    }
  }
}
</style>
