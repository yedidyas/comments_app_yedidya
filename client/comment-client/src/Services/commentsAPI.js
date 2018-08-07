import axios from 'axios';
import config from '../config/config.js';

export function getComments() {
    return axios.get(config.API_URL + config.getComments_QUERY, config.GETconfig)
}

export function addComment(mail, message) {
    return axios.post(config.API_URL + config.addComment_QUERY,
        {
            mail: mail,
            message: message
        },
        config.POSTconfig)
}  

export function getNewestComment(mail) {
    return axios.post(config.API_URL + config.getNewestComment_QUERY,
        {
            mail: mail
        },
        config.POSTconfig)
} 