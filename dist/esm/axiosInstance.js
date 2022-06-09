import axios from 'axios';
axios.defaults.headers.common['content-type'] = 'application/json';
axios.defaults.headers.common['user-agent'] =
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Mobile Safari/537.36';
axios.defaults.headers.common['accept-encoding'] = 'gzip';
axios.defaults.headers.common['connection'] = 'keep-alive';
axios.defaults.headers.common['platform'] = 'android';
axios.defaults.headers.common['sec-ch-ua-mobile'] = '?1';
axios.defaults.headers.common['sec-ch-ua-platform'] = 'Android';
const axiosGoogleInstance = axios.create({
    baseURL: 'https://www.google.com/search?q=',
    headers: {
        ['host']: 'www.google.com',
    },
});
const axiosOnlineInstance = axios.create({
    timeout: 1000,
});
const axiosInstance = {
    axiosGoogleInstance,
    axiosOnlineInstance,
};
export default axiosInstance;
