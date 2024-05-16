import { hotChatPath, postHotChatPath } from '../utils/path';
import ajax from '../network/ajax';

export default {
    namespaced: true,
    state: {
        loading: false,
        isMessageSending: false,
        messages: [],
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },

        setMessing(state, value) {
            state.isMessageSending = value;
        }
    },
    actions: {
        getMessages({ commit }, data) {
            commit('setLoading', true);
            return ajax.post(hotChatPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        },

        postMessage({ commit }, data) {
            commit('setMessing', true);
            return ajax.post(postHotChatPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setMessing', false);
                });
        }
    },
};
