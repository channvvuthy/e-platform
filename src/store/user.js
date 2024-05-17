import { verifyOwnerPath, changePasswordPath } from '../utils/path';
import ajax from '../network/ajax';

export default {
    namespaced: true,
    state: {
        loading: false,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },
    },
    actions: {
        verifyAccountOwner({ commit }, data) {
            commit('setLoading', true);
            return ajax.get(verifyOwnerPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        },

        changePassword({ commit }, data) {
            commit('setLoading', true);
            return ajax.post(changePasswordPath, data)
                .then((response) => {
                    return response;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        },
    },
};
