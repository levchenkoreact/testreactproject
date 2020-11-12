export const REQUEST_TIMEOUT = 20000;
const BASE_URL = 'https://api.openweathermap.org';

async function getFetchAction(endpoint, method, body) {

    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    let request = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };
    let url = `${BASE_URL}${endpoint}`;
    return fetch(url, request);
}

const timeoutAction = (reject) => {
    setTimeout(() => reject(new Error('request timeout')), REQUEST_TIMEOUT);
};

export function callApi(endpoint, method, body) {
    return Promise.race([
        getFetchAction(endpoint, method, body),
        new Promise((resolve, reject) => timeoutAction(reject)),
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
