import { registerPath } from '../utils/path';
import ajax from '../network/ajax';


export default {
    namespaced: true,
    state: {
        loading: false,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        }
    },
    actions: {
        /**
         * Perform user registration.
         *
         * @param {Object} commit - The Vuex commit function.
         * @param {Object} data - The data to be sent for registration.
         * @return {Promise} A promise with the registration result.
         */
        performRegister({ commit }, data) {
            commit('setLoading', true);
            return ajax.post(registerPath, data)
                .then(({ data }) => {
                    localStorage.setItem("xtoken", data.token);
                    localStorage.setItem("user", JSON.stringify(data));
                    this.dispatch('auth/setAuthInfo', data, { root: true });
                    return data;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        }
    },
};
