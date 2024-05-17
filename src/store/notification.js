import { getNotificationPath, readNotificationPath } from '../utils/path';
import ajax from '../network/ajax';

export default {
    namespaced: true,
    state: {
        loading: false,
        notifications: [],
        notification: null,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },

        setNotification(state, value) {
            state.notification = value;
        },

        /**
         * Set the notifications in the state to the provided value.
         *
         * @param {Object} state - The Vuex state object.
         * @param {any} value - The value to set as notifications.
         */
        setNotifications(state, value) {
            state.notifications = value;
        },
        /**
         * A function to add notifications to the state.
         *
         * @param {Object} state - The Vuex state object.
         * @param {Array} values - The values to add to notifications.
         */
        addNotifications(state, values) {
            state.notifications.push(...values);
        },

        readNotification() {

        }
    },
    actions: {
        /**
         * A function to fetch notifications based on the provided props.
         *
         * @param {Object} commit - The Vuex commit function.
         * @param {Object} props - The properties to fetch notifications.
         * @return {Object} The fetched notification data
         */
        async fetchNotifications({ commit }, props) {
            commit('setLoading', true);
            try {
                const { data } = await ajax.get(getNotificationPath, props);

                if (props.p && props.p > 1) {
                    commit('addNotifications', data);
                } else {
                    commit('setNotifications', data);
                }

                return data;
            } finally {
                commit('setLoading', false);
            }
        },

        async readNotification({ commit }, props) {
            try {
                const { data } = await ajax.get(readNotificationPath, props);
                return data;
            } finally {
                commit('readNotification', true);
            }
        },
    },
};
