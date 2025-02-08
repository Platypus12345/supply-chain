// api/googleMapsApi.js
export const GOOGLE_MAPS_API_KEY = "AIzaSyC9w8FlmqEca74bTClp1l_LzV_guop48YE";

export const getGoogleMapsURL = (endpoint, params = {}) => {
    const url = new URL(`https://maps.googleapis.com/maps/api/${endpoint}`);
    url.search = new URLSearchParams({
        key: GOOGLE_MAPS_API_KEY,
        ...params,
    }).toString();
    return url;
};
