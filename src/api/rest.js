export const REQUEST_TIMEOUT = 20000;
const BASE_URL = 'https://api.openweathermap.org';
const CITY_NAME = 'Minsk';
const UNITS = 'metric';
const API_KEY = '0ac8d7aaee48212323ef27b26fc6a0e4' // how to store apiKey in react???

async function getFetchAction(endpoint, method, body) {
    const headers = [['Content-Type', 'application/json']]; // ???? [[]]
    let request = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };
    let url = `${BASE_URL}${endpoint}?q=${CITY_NAME}&units=${UNITS}&appid=${API_KEY}`;
    console.log('REQUEST Endpoint:', method, url);
    console.log('REQUEST:', request);
    return fetch(url, request); // ????? fetch?
}

const timeoutAction = (reject) => {
    setTimeout(() => reject(new Error('request timeout')), REQUEST_TIMEOUT); // Handler?
};

export function callApi(endpoint, method, body) {
    return Promise.race([
        getFetchAction(endpoint, method, body),
        new Promise((resolve, reject) => timeoutAction(reject)), // ?????????
    ])
        .then((response) => {
            return response.json().then((json) => {
                return {json, response};
            });
        })
        .then(({json, response}) => {
            if (!response.ok || !json) {
                json.code = response.status;
                return Promise.reject(json);
            }
            return json;
        });
}

