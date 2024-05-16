import { loginPath } from '../utils/path';
import ajax  from '../network/ajax';

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
        performLogin({ commit }, data) {
            commit('setLoading', true);
            return ajax.post(loginPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        }
    },
};
