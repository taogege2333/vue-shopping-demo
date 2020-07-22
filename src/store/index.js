import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    "ADD_GOODS"(state, goods) {
      let index = null;
      for(let i in state.cart) {
        if(state.cart[i].id === goods.id) {
          index = i;
        }
      }
      if(index) {
        state.cart[index].num++;
      } else {
        state.cart.push(Object.assign({}, goods, {num: 1}));
      }
    },
    "REDUCE_GOODS"(state, id) {
      let index = null;
      for(let i in state.cart) {
        if(state.cart[i].id === id) {
          index = i;
        }
      }
      if(index) {
        if(state.cart[index].num > 1) {
          state.cart[index].num--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    }
  },
  actions: {
    addGoods({commit}, goods) {
      commit("ADD_GOODS", goods);
    },
    reduceGoods({commit}, id) {
      commit("REDUCE_GOODS", id);
    }
  },
});
