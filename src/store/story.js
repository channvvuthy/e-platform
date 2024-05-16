import { storyPath } from '../utils/path';
import ajax from '../network/ajax';


export default {
    namespaced: true,
    state: {
        loading: false,
        page: 1,
        stories: [],
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },

        setPage(state, value) {
            state.p = value;
        },

        getStories(state, value) {
            state.stories = value;
        },

        getStoriesByPage(state, value) {
            state.stories = [...state.stories, ...value];
        }

    },
    actions: {
        /**
         * A function to retrieve stories based on the provided props.
         *
         * @param {Object} commit - The Vuex commit function.
         * @param {Object} props - The properties to fetch stories.
         * @return {Promise} A promise with the fetched stories data.
         */
        getStories({ commit }, props) {
            commit('setLoading', true);
            return ajax.get(storyPath, props)
                .then(({ data }) => {
                    if (props && props.page && props.page > 1) {
                        commit('getStoriesByPage', data);
                    } else {
                        commit('getStories', data);
                    }
                    return data;
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        },

    },
};
