/**
 * Created by du on 16/4/29.
 */
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as cache from './cache_token';
import AuthApi from './api/AuthApi';
import config from './config';

const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

const basePostData = {
    // Device: "Mobile",
    // DeviceOS: "Andorid_IOS",
    // DeviceVersion: "8.x",
    // _UserId: "",
    // _SubsidiaryCode: "CN",
    // _ClientKey: "ProjectName",
    // _UserName: "User"
};

function request(url, method, reqd) {
    let data = reqd || {};
    data = {...basePostData, ...data};

    const config = { url, method, body: data};

    const reqFunc = () => {
        const token = cache.getToken();
        if(!token)
            return Rx.Observable.of(null);

        const access_token = token.access_token;  

        config.headers = { Authorization: `Bearer ${access_token}` };

        return ajax(config);
    };

    return reqFunc()
            .catch(error => {
                if(error.status == 401 || error.status == 403)
                    return refreshAccessToken().switchMap(() => reqFunc());
                else
                  return Rx.Observable.throw(error);
        }); 
}


function refreshAccessToken() {
    const { tokenId, refresh_token } = cache.getToken();

    return AuthApi.refreshAccessToken(refresh_token)
        .map(ajaxResponse => ajaxResponse.response)
        .do(response => {
            cache.setToken({ 
                tokenId, 
                access_token: response.access_token, 
                refresh_token: response.refresh_token
             });
        })
        .map(response=>response.access_token);
}

export function getAccessToken(username, password) {
    return AuthApi.getAccessToken(username, password)
    .map(ajaxResponse => ({username, response: ajaxResponse.response}))
    .do(({username, response}) => {
        const token = {
            tokenId: username, 
            access_token: response.access_token, 
            refresh_token: response.refresh_token 
        };
        cache.setToken(token);
    })
    .switchMap(() => getAccount().map(ajaxResponse => ajaxResponse.response));
}

export function getAccount() {
    const { AUTH_HOST } = config;
    const url = `${AUTH_HOST}/identity/connect/userinfo`;

    return req(url).get();
}

let req = url =>{
    return {
        get(reqd){
            return request(url, methods.GET, reqd);
        },
        post(reqd){
            return request(url, methods.POST, reqd);
        },
        put(reqd){
            return request(url, methods.PUT, reqd);
        },
        delete(reqd){
            return request(url, methods.DELETE, reqd);
        },
    };
};

export default req;



