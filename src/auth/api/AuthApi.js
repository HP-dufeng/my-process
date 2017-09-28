import { ajax } from 'rxjs/observable/dom/ajax';

import config from '../config';

class AuthApi {
    static getAccessToken(username, password) {
        const { AUTH_HOST, params:{CLIENT_ID, CLIENT_SECRET, SCOPE} } = config;
        let grant_type = "password";

        let url = `${AUTH_HOST}/identity/connect/token`;

        let data =`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=${encodeURIComponent(grant_type)}&scope=${encodeURIComponent(SCOPE)}`;
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        };

        return ajax.post(url, data, headers);
    }

    static refreshAccessToken(refresh_token) {
        const { AUTH_HOST, params:{CLIENT_ID, CLIENT_SECRET} } = config;
        let grant_type = "refresh_token";
        
        let url = `${AUTH_HOST}/identity/connect/token`;
        let data =`refresh_token=${encodeURIComponent(refresh_token)}&client_id=${encodeURIComponent(CLIENT_ID)}&client_secret=${encodeURIComponent(CLIENT_SECRET)}&grant_type=${encodeURIComponent(grant_type)}`;
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        }

        return ajax.post(url, data, headers);
    }

    // static getAccount(access_token) {
    //     const { AUTH_HOST } = config;
    //     const url = `${AUTH_HOST}/identity/connect/userinfo`;
    //     const headers = {
    //         authorization: `Bearer ${access_token}`
    //     }

    //     return ajax.get(url, headers);
    // } 
}

export default AuthApi;