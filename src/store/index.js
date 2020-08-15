import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [
      {
        id: "0",
        name: "我是水果1",
        introduce: "我是苹果1的介绍我是苹果1的介绍我是苹果1的介绍我是苹果1的介绍我是苹果1的介绍我是苹果1的介绍",
        price: 12.00,
        image: "/image/水果.png",
        type: "水果",
        num: 3
      },
      {
        id: "1",
        name: "我是水果2",
        introduce: "我是苹果2的介绍我是苹果2的介绍我是苹果2的介绍我是苹果2的介绍我是苹果2的介绍我是苹果2的介绍",
        price: 18.00,
        image: "/image/水果2.png",
        type: "水果",
        num: 10
      },
    ],
    user: {} // {username: "王小明"}
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {
    ADD_GOODS(state, goods) {
      let index = null;
      for (let i in state.cart) {
        if (state.cart[i].id === goods.id) {
          index = i;
        }
      }
      if (index) {
        state.cart[index].num++;
      } else {
        state.cart.push(Object.assign({}, goods, { num: 1 }));
      }
    },
    REDUCE_GOODS(state, id) {
      let index = null;
      for (let i in state.cart) {
        if (state.cart[i].id === id) {
          index = i;
        }
      }
      if (index) {
        if (state.cart[index].num > 1) {
          state.cart[index].num--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    addGoods({ commit }, goods) {
      commit("ADD_GOODS", goods);
    },
    reduceGoods({ commit }, id) {
      commit("REDUCE_GOODS", id);
    },
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    }
  }
});
