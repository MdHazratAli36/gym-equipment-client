import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }

    return config;

}, function (error) {
    return Promise.reject(error);
});


axiosPrivate.interceptors.response.use(function (response) {
    return response;

}, function (error) {
   
    if (error.response.status === 403) {
        //use refresh token here
        //send token to the server
    }
    return Promise.reject(error);
});

export default axiosPrivate;