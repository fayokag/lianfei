/**
 * Created by Jason on 2017/10/17.
 */


// import UserController from '../utils/UserController'
import BaseApiCallback from './BaseApiCallback'
import ApiUrls from "./ApiUrls";
import {log} from '../utils/LogUtils'


class ApiUtils{
        static JWT_VALUE = null;

        baseUrl;
        constructor(baseUrl) {
            this.baseUrl = baseUrl;
    }

    callbackObj = null;
    fetchParams = [];
    execute(
        onResponse = null,
        onError = null,
        onFinish = null){
        this.callbackObj = new BaseApiCallback(onResponse, onError, onFinish);
        fetch(...this.fetchParams)
            .then((response) => {
                // ApiUtils.getJwtOnResponseHeader(response.headers);
                return response.json();
            })
            .then((responseJson) => {
                this.callbackObj.onParseResponse(responseJson);
            })
            .catch(this.callbackObj.onError);
    }

    fetch(url, method, paramNames=[], paramValues=[],requestHeaders){
        let parsedUrl = ApiUtils.getConvertedUrlPath(url, paramNames, paramValues);
        url =  this.baseUrl + url;
        if(method === 'GET'){
            const headers = {
                "Content-Type": "application/json;charset=UTF-8",
            };
            log('get headers : ' + JSON.stringify(headers));

            if(parsedUrl.indexOf('?') < 0){
                parsedUrl += '?';
            } else if(!parsedUrl.endsWith('&')) {
                parsedUrl += '&';
            }
            const params = ApiUtils.getRequestParamsString(url, paramNames, paramValues);
            const requestUrl = this.baseUrl + parsedUrl + params;
            console.log(method + 'request url :' + requestUrl);  //打印请求参数
            this.fetchParams = [requestUrl, {
                method: method,
                headers: headers
            }];
        }else {
            let hasFileParam = ApiUtils.hasFileParam(paramValues);

            const headers = {};//'application/x-www-form-urlencoded'
            headers['Content-Type'] = 'multipart/form-data' ;
            console.log('post headers : ' + JSON.stringify(headers));

            const formData = hasFileParam ? ApiUtils.getFormData(url, paramNames, paramValues)
                                            : ApiUtils.getRequestParamsString(url, paramNames, paramValues);
            const requestUrl = this.baseUrl + parsedUrl;
            console.log(method + 'request url post:' + requestUrl);  //打印请求地址
            console.log(method + 'request formData:' + JSON.stringify(formData));  //打印请求参数
            this.fetchParams = [requestUrl, {
                method: method,
                headers: headers,
                body: formData,
            }];
        }
        return this;
    }

    /**
     * url的Path替换
     * @param url
     * @param paramNames
     * @param paramValues
     * @returns {*}
     */
    static getConvertedUrlPath(url, paramNames, paramValues){
        for(let i=0; i<paramValues.length; i++) {
            if (paramValues[i] === null || paramValues[i] === undefined) continue;
            const key = '{' + paramNames[i] + '}';
            if (url.indexOf(key) !== -1) {
                //path替换
                url = url.replace(key, paramValues[i]);
            }
        }
        return url;
    }

    /**
     * 获得请求参数拼接字符串
     * @param url
     * @param paramNames
     * @param paramValues
     * @returns {*}
     */
    static getRequestParamsString(url, paramNames, paramValues){
        let result = '';
        for(let i=0; i<paramValues.length; i++) {
            if (paramValues[i] === null || paramValues[i] === undefined) continue;
            if (url.indexOf('{' + paramNames[i] + '}') !== -1) {
                //path替换
                continue;
            } else {
                //添加request params
                if(result.length > 0) result += '&';
                result += paramNames[i] + '=' + paramValues[i];
            }
        }
        // if(url.indexOf(ApiUrls.getCsharpUrl()) !== -1) {
        //     const loginedUserId = UserController.getLoginedUserId();
        //     if (loginedUserId !== null) result += "&uID=" + loginedUserId;
        // }
        return result;
    }

    static hasFileParam(paramValues){
        if(!paramValues || !Array.isArray(paramValues)) return false;
        for(let param of paramValues){
            if(param && param.type) return true;
        }
        return false;
    }

    /**
     * 生成POST formData
     *
     */
    static getFormData(url, paramNames, paramValues){
        let formData = new FormData();
        for(let i=0; i<paramValues.length; i++) {
            if (paramValues[i] === null || paramValues[i] === undefined) continue;
            if (url.indexOf('{' + paramNames[i] + '}') === -1) {
                //添加request params
                formData.append(paramNames[i],paramValues[i]);
            }
        }
        // if(url.indexOf(ApiUrls.getCsharpUrl()) !== -1){
        //     const loginedUserId = UserController.getLoginedUserId();
        //     if(loginedUserId !== null) {
        //         formData.append('uID' , loginedUserId);
        //     }
        // }
        return formData;
    }


    /**
     * formData 文件对象
     */
    static getFormDataFile(uri,fileName,mime){
        return {
            uri: uri,
            name: fileName,
            type: 'multipart/form-data',
        }
    }

    /**
     *
     * @param picture 从react-native-image-crop-picker取到的图片文件对象
     */
    static getPictureFileFormData(picture){
        let path = picture.path;
        let names = path.split('/');
        let name = names[names.length-1];
        return ApiUtils.getFormDataFile(path, name, picture.mime);
    }

    // static getJwtOnResponseHeader(headers){
    //     if(headers && headers.get && headers.get('Authorization')){
    //         //从header中获取token
    //         let jwt = headers.get('Authorization');
    //         if(jwt){
    //             jwt = jwt.split(' ');
    //             if(jwt && jwt.length > 1){
    //                 jwt = jwt[1];
    //                 ApiUtils.JWT_VALUE = jwt;
    //             }
    //         }
    //     }
    // }
}

export default ApiUtils;