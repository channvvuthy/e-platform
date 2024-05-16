import { machineIdSync } from "node-machine-id";
const os = require('os');

export const getDeviceId = () => machineIdSync();

/**
 * Returns the operating system based on the process platform.
 *
 * @return {string} The operating system ('macos', 'windows', or 'linux').
 */

export const deviceOs = () => {
    switch (process.platform) {
        case 'darwin':
            return 'macos';
        case 'win32':
            return 'windows';
        default:
            return 'linux';
    }
};

export const deviceName = () => os.hostname();
export const osVersion = () => os.release();

/**
 * A function that returns device information including device ID, device OS, device name, and OS version.
 *
 * @return {Object} Object containing device information
 */
export const deviceInfor = () => {
    return {
        device_id: getDeviceId(),
        device_os: deviceOs(),
        device_name: deviceName(),
        os_version: osVersion(),
    }
}

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