import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { apiBaseUrl, basicAuth } from '../constant';
import { queryString } from '../utils/common';
const $toast = useToast();

const api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Authorization': basicAuth
    }

});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('xtoken');
        if (token) {
            config.headers['xtoken'] = `${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            $toast.error('You are unauthorized to perform this action');
        } else if (error.response.status === 500) {
            $toast.error('Server error! Please try again later');
        }
        return Promise.reject(error);
    }
);

/**
 * Handles the response data by checking the status and returning the data or throwing an error.
 *
 * @param {Object} response - The response object containing data and status.
 * @return {Object} The response data if the status is 0, otherwise throws an error with the response data.
 */
const handleResponse = (response) => {
    if (response.data.status === 0) {
        return response.data;
    }
    throw response.data;
}

/**
 * Handles the error response by displaying an error message and throwing an error.
 *
 * @param {Object} error - The error object containing response data or a message.
 * @return {void}
 */
const handleError = (error) => {
    const message = error.response ? error.response.data.message : error.message;
    $toast.error(message);
    throw message;
};


const apiMethods = {
    get(url, props = {}) {
        return api.get(`${url}?${queryString(props)}`).then((res) => {
            return handleResponse(res);
        }).catch((error) => {
            return handleError(error);
        })
    },
    post(url, data, config = {}) {
        return api.post(url, data, config)
            .then((res) => {
                return handleResponse(res);
            }).catch((error) => {
                return handleError(error);
            });
    },
    put(url, data, config = {}) {
        return api.put(url, data, config)
            .then((res) => {
                return res.data;
            }).catch(({ response }) => {
                throw response.data.message;
            });
    },
    delete(url, config = {}) {
        return api.delete(url, config);
    },
    patch(url, data, config = {}) {
        return api.patch(url, data, config);
    }
};

export default apiMethods;
