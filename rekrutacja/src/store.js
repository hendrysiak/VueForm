import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isValid: false,
    },
    mutations: {
        VALIDATE_FORM(state, payload) {
            state.isValid = payload ? true : false;
        }
    },
    actions: {
        setValidationFlag(commit, payload) {
            commit('VALIDATE_POSTS', payload)
        }
    },
});