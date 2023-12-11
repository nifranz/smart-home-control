import axios from 'axios';

export default async function get(URL) {
    let baseURL = 'http://localhost:3002'
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: baseURL + URL
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            let error_message = error.message;
            reject(error_message);
        });
    })
}