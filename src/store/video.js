import ajax from '../network/ajax';
import { videoPath } from '../utils/path';
export default {
    namespaced: true,
    state: {
        loading: false,
        videos: [],
        filters: {
            p: 1,
            s: '',
            filter_id: '',
        }
    },
    mutations: {
        /**
         * Sets the loading state in the Vuex store.
         *
         * @param {Object} state - The Vuex state object.
         * @param {boolean} value - The new value for the loading state.
         */
        setLoading(state, value) {
            state.loading = value;
        },

        /**
         * Sets the videos in the state to the provided values.
         *
         * @param {Object} state - The Vuex state object.
         * @param {Array} values - The values to set as videos.
         */
        setVideos(state, values) {
            state.videos = values;
        },

        setFilter(state, value) {
            state.filters = value;
        }
    },
    actions: {
        /**
         * Asynchronously fetches videos from the server based on the provided props and updates the store.
         *
         * @param {Object} commit - The Vuex commit function.
         * @param {Object} props - The properties to fetch videos. Defaults to an empty object.
         * @return {Promise<Object>} A promise that resolves to the fetched video data.
         */
        async fetchVideos({ commit }, props = {}) {
            commit('setLoading', true);
            try {
                const { data } = await ajax.get(videoPath, props);
                commit('setVideos', data);
                return data;
            } finally {
                commit('setLoading', false);
            }
        },

        /**
         * Filters videos based on the provided props and updates the store.
         *
         * @param {Object} commit - The Vuex commit function.
         * @param {Object} props - The properties to filter videos. Defaults to an empty object.
         * @return {void}
         */
        filterVideos({ commit }, props = {}) {
            commit('setFilter', true);
            this.dispatch('video/fetchVideos', props, { root: true });
        }
    },
};
