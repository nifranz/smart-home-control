import axios from 'axios';

export default async function getDevices() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get'
        })
    })
}