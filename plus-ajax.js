var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
* desc: 兼容Plus的ajax请求方法
* author: tianxiangbing
*/

var Ajax = {
    globalSettings: {
        timeout: 120000,
        async: true
    },
    ajax: function ajax(settings) {
        var callback = {
            then: function then() {},
            catch: function _catch() {}
        };
        var ajaxSettings = _extends(globalSettings, settings);
        _extends(ajaxSettings, {
            successCallback: function successCallback(res) {
                callback.then(res);
            },
            errorCallback: function errorCallback(res) {
                callback.catch(res);
            }
        });
        plus.httpEngine.httpReq(ajaxSettings);
        return {
            then: function then(t) {
                callback.then = t;
            },
            catch: function _catch(t) {
                callback.catch = t;
            }
        };
    },
    get: function get(url, data) {
        return this.ajax({ type: 'get', data: data });
    },
    post: function post(url, data) {
        return this.ajax({ type: 'post', data: data });
    }
};
module.exports = Ajax;