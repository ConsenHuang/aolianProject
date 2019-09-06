let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api';
    // 本地环境这个一定要设置为空

} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://localhost:3000';
    //baseUrl = '预发布地址';
    // baseUrl = '"http://localhost:3000"';
    // 上线后的地址
}

export {
    baseUrl,//导出baseUrl
}
