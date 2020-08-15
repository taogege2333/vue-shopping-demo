<template>
  <div class="edit-address">
    <Header title="新增收货地址" showBack to="/address" />
    <MainContent bottom="0" zIndex="600" bgColor="#f5f5f5">
      <div class="address-form">
        <div class="address-form-item">
          <div class="form-item-label">
            <span style="color: #f56c6c;">*</span>
            收货人
          </div>
          <div class="form-item-input">
            <MyInput
              class="input"
              v-model="receiver.value"
              :blurEventFunc="handleCheckReceiver"
              :isWarning="receiver.isNoPass"
            />
            <p v-show="receiver.isNoPass" class="warning-tip">
              {{ receiver.tip }}
            </p>
          </div>
        </div>
        <div class="address-form-item">
          <div class="form-item-label">
            <span style="color: #f56c6c;">*</span>
            电话
          </div>
          <div class="form-item-input">
            <MyInput
              class="input"
              v-model="phone.value"
              :blurEventFunc="handleCheckPhone"
              :isWarning="phone.isNoPass"
            />
            <p v-show="phone.isNoPass" class="warning-tip">
              {{ phone.tip }}
            </p>
          </div>
        </div>
        <div class="address-form-item">
          <div class="form-item-label">
            <span style="color: #f56c6c;">*</span>
            收货地址
          </div>
          <div class="form-item-input">
            <MyInput
              class="input"
              v-model="address.value"
              :blurEventFunc="handleCheckAddress"
              :isWarning="address.isNoPass"
            />
            <p v-show="address.isNoPass" class="warning-tip">
              {{ address.tip }}
            </p>
          </div>
        </div>
      </div>
      <div class="btns">
        <MyButton v-bind="{text: btnText1, color: '#fff', bgColor: '#409eff', btnClickFunc: handleClickSave}" />
        <MyButton
          class="btn-del"
          v-bind="{text: btnText2, color: '#fff', bgColor: '#f56c6c', btnClickFunc: handleClickDelete}"
        />
      </div>
    </MainContent>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import MainContent from "../components/common/MainContent";
import MyInput from "../components/common/MyInput";
import MyButton from "../components/common/MyButton";
import { getAddressDetail, addAddress, updateAddress, deleteAddress } from "../api/index.js";

export default {
  components: {
    Header,
    MainContent,
    MyInput,
    MyButton
  },
  data() {
    return {
      receiver: {
        value: "",
        isNoPass: false,
        tip: ""
      },
      phone: {
        value: "",
        isNoPass: false,
        tip: ""
      },
      address: {
        value: "",
        isNoPass: false,
        tip: ""
      }
    };
  },
  computed: {
    btnText1() {
      return this.$route.params.id ? "保存修改" : "保存收货地址";
    },
    btnText2() {
      return this.$route.params.id ? "删除收货地址" : "重置";
    }
  },
  methods: {
    handleClickDelete() {
      if(this.$route.params.id) {
        deleteAddress(this.$route.params.id).then(res => {
          if(res.code === 1) {
            this.$router.push("/address");
          }
        });
      } else {
        this.receiver.value = "";
        this.phone.value = "";
        this.address.value = "";
      }
    },
    handleClickSave() {
      this.handleCheckReceiver();
      this.handleCheckPhone();
      this.handleCheckAddress();
      if(!this.receiver.isNoPass && !this.phone.isNoPass && !this.address.isNoPass) {
        if(this.$route.params.id) {
          updateAddress({
            id: this.$route.params.id,
            receiver: this.receiver.value,
            phone: this.phone.value,
            address: this.address.value
          }).then(res => {
            if(res.code === 1) {
              this.$router.push("/address");
            }
          })
        } else {
          addAddress({
            receiver: this.receiver.value,
            phone: this.phone.value,
            address: this.address.value
          }).then(res => {
            if(res.code === 1) {
              this.$router.push("/address");
            }
          })
        }
      }
    },
    handleCheckReceiver() {
      if (!this.receiver.value) {
        this.receiver.isNoPass = true;
        this.receiver.tip = "请输入姓名";
      } else {
        this.receiver.isNoPass = false;
      }
    },
    handleCheckPhone() {
      if(!this.phone.value) {
        this.phone.isNoPass = true;
        this.phone.tip = "请输入电话";
      } else if(this.phone.value.length !== 11 || !/^1[3456789]\d{9}/.test(this.phone.value)) {
        this.phone.isNoPass = true;
        this.phone.tip = "手机号不正确";
      } else {
        this.phone.isNoPass = false;
      }
    },
    handleCheckAddress() {
      if (!this.address.value) {
        this.address.isNoPass = true;
        this.address.tip = "请输入收货地址";
      } else {
        this.address.isNoPass = false;
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    if(id) {
      getAddressDetail(id).then(res => {
        this.receiver.value = res.result.receiver;
        this.phone.value = res.result.phone;
        this.address.value = res.result.address;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.edit-address {
  .address-form {
    margin-top: px2rem(10);
    padding: px2rem(10);
    background-color: #fff;
    .address-form-item {
      display: flex;
      flex-direction: row;
      .form-item-label {
        width: px2rem(100);
        flex-basis: px2rem(100);
        line-height: px2rem(40);
      }
      .form-item-input {
        flex: 1;
        position: relative;
        .input {
          color: #888;
          margin-bottom: px2rem(24);
        }
        .warning-tip {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: px2rem(12);
          margin: px2rem(6) 0;
          color: #f56c6c;
        }
      }
    }
  }
  .btns {
    margin-top: px2rem(20);
    @include center;
    .btn-del {
      margin-left: px2rem(10);
    }
  }
}
</style>
