import { videoPackagePath } from '../utils/path';
import ajax from '../network/ajax';

export default {
    namespaced: true,
    state: {
        loading: false,
        collections: {}
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },

        setCollections(state, value) {
            state.collections = value;
        }
    },
    actions: {
        fetchCollections({ commit }, props) {
            commit('setLoading', true);
            return ajax.get(videoPackagePath, props)
                .then(({ data }) => {
                    commit('setCollections', data);
                    return data;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        }
    },
};
