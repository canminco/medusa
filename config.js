function initConfig() {
    var configInfo = {

        //mysql max connections
        default_max_conns : 50,

        medusa_Connect       : {
            user          : "medusa",
            password      : "medusa",
            connectString : "localhost/orcl"
        },
        data_collect_Connect       : {
            user          : "coll",
            password      : "coll",
            connectString : "localhost/orcl"
        },

        default_page_size : 50,

        statusCode        : {
            STATUS_OK                 : 0,
            STATUS_NOTFOUND           : 1,        //means data not found not url request
            STATUS_SERVER_ERROR       : 2,
            STATUS_INVAILD_PARAMS     : 3,
            STATUS_DBERROR            : 4
            //....
        }
    };

    return configInfo;
}

//exports
exports.initConfig = initConfig;