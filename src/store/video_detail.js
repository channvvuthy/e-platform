import ajax from '../network/ajax';
import { videoDetailPath } from '../utils/path';
export default {
    namespaced: true,
    state: {
        loading: false,
        videoDetail: [],
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

        setVideoDetail(state, values) {
            state.videoDetail = values;
        },

        addVideos(state, values) {
            state.videos.list.push(...values);
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
        async fetchVideoDetail({ commit }, props = {}) {
            commit('setLoading', true);
            try {
                const { data } = await ajax.get(videoDetailPath, props);
                commit('setVideoDetail', data);
                return data;
            } finally {
                commit('setLoading', false);
            }
        },

    },
};
