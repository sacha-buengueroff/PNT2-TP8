import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

import './axios'

export default new Vuex.Store({
  state: {
    url: "https://633f79bd0dbc3309f3cb1986.mockapi.io/api/usuariosTP7",
    users: [],
  },
  actions: {
    enviarUsuario({ commit }, user) {
      try {
        commit("enviarUsuario", user);
      } catch (error) {
        console.log(error);
      }
    },
    buscarUsuarios({ commit }) {
      try {
        commit("buscarUsuarios");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    async enviarUsuario(state, user) {
      try {
        await axios.post(state.url, user);
      } catch (error) {
        console.log(error);
      }
    },
    async buscarUsuarios(state) {
        try {
            let {data: users} = await axios(state.url)
            state.users = users
        }
        catch (error) {
            console.log(error);
        }
    }
  },
});
