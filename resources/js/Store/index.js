import Vue from "vue";
import Vuex from "vuex";
import Todo from "./Modules/Todo";

import Axios from 'axios';

// Load Vuex
Vue.use(Vuex);

// Load Axios
Vue.use(Axios);

const debug = process.env.NODE_ENV !== "production";


// Create store
export default new Vuex.Store({
  modules: {
    Todo,
  },
  
  strict: debug
});