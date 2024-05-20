/**
 * Generates a random string of specified length using alphanumeric characters.
 *
 * @param {number} length - The length of the random string (default is 10)
 * @return {string} The randomly generated string
 */
export const randomString = (length = 10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

/**
 * Retrieves the duration of an audio blob.
 *
 * @param {Blob} blob - The audio blob for which to determine the duration.
 * @return {Promise<number>} A promise that resolves with the duration of the audio in seconds.
 */
export const getBlobDuration = async (blob) => {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(blob);
        const audio = new Audio();
        audio.preload = 'metadata';

        audio.addEventListener('loadedmetadata', () => {
            if (audio.duration === Infinity) {
                audio.currentTime = Number.MAX_SAFE_INTEGER;
                audio.addEventListener('timeupdate', () => {
                    resolve(audio.duration);
                    audio.currentTime = 0;
                }, { once: true });
            } else {
                resolve(audio.duration);
            }
            URL.revokeObjectURL(url);
        });

        audio.addEventListener('error', () => {
            reject(new Error(`Failed to load media metadata: ${audio.error?.message || 'unknown error'}`));
        });

        audio.src = url;
    });
}

/**
 * A description of the entire function.
 *
 * @return {Promise} A promise with the device information.
 */
export const getDeviceInfo = async () => {
    return await await window.electron.getDeviceInfo();
}

/**
 * A description of the entire function.
 *
 * @param {type} theBlob - description of parameter
 * @param {type} fileName - description of parameter
 * @return {type} description of return value
 */
export const blobToFile = (theBlob, fileName) => {
    return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: "audio/mpeg" })
}


export const queryString = props => {
    return Object.keys(props)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(props[key])}`)
        .join('&');
}

/**
 * A function that truncates a string if it exceeds the specified maximum length.
 *
 * @param {string} str - The input string to be truncated.
 * @param {number} maxLength - The maximum length allowed for the string. Default is 50.
 * @return {string} The truncated string with '...' appended if it exceeds maxLength.
 */
export const truncateString = (str, maxLength = 50) => {
    if (str.length < maxLength) {
        return str;
    }
    return str.substring(0, maxLength) + '...';
}

export const linkifiedText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" class="text-primary">${url}</a>`;
    });
}

/**
 * Dispatches a click event on the document body.
 *
 * @return {void} This function does not return anything.
 */
export const dispatchEventClick = () => {
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    document.body.dispatchEvent(event);
}