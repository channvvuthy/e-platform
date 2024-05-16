import { hotChatPath } from '../utils/path';
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
        getMessages({ commit }, data) {
            console.log('Login data:', data);
            commit('setLoading', true);
            return ajax.post(hotChatPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        }
    },
};
