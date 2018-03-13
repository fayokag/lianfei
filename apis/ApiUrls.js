/**
 * Created by Mavio on 2017/8/24.
 */

import React from 'react'

class ApiUrls {
    static DEBUG = true;
    //hk.askwilliam.cn
    // http://180.168.191.170:8089/service/v1.2.7?&Terminal=3&usercode=liyl&pwd=111111
    //

    static debug_csharp_url = 'http://hk.askwilliam.cn';

    getCsharpUrl(){
        return ApiUrls.debug_csharp_url;
    }

    getUrl(){
        return this.getCsharpUrl();
    }

    getImageUrl(){
        return 'http://hk.askwilliam.cn/upload/';
    }
}
export default new ApiUrls();