import ajax from '../network/ajax';
import { logoutPath } from '../utils/path';
export default {
    namespaced: true,
    state: {
        loading: false,
        info: {}
    },
    mutations: {
        setAuthInfo(state, value) {
            state.info = value;
        },

        logoutUser() {
            localStorage.removeItem("xtoken");
            localStorage.removeItem("user");
        }
    },
    actions: {
        /**
         * Set the authentication information based on the user data stored in localStorage.
         *
         * @param {Object} commit - The Vuex commit function.
         * @return {void}
         */
        setAuthInfo({ commit }) {
            const auth = localStorage.getItem('user');
            if (auth) {
                commit('setAuthInfo', JSON.parse(auth));
            }
        },

        async logout({ commit }) {
            const res = await ajax.get(logoutPath);
            commit('logoutUser');
            return res;
        }
    },
};
