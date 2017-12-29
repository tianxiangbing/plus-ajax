/*
* desc: 兼容Plus的ajax请求方法
* author: tianxiangbing
*/ 

var Ajax = {
    globalSettings:{
        timeout:120000,
        async : true
    },
    ajax(settings) {
        let callback = {
            then(){},
            catch(){}
        }
        let ajaxSettings = Object.assign(globalSettings,settings);
        Object.assign( ajaxSettings ,{
            successCallback : (res)=>{
                callback.then(res)
            } ,
            errorCallback(res){
                callback.catch(res)
            }
        });
        plus.httpEngine.httpReq(ajaxSettings);
        return {
            then(t){
                callback.then = t;
            },
            catch(t){
                callback.catch = t;
            }
        }
    },
    get(url,data){
        return this.ajax({type:'get',data})
    },
    post(url,data){
        return this.ajax({type:'post',data});
    }
}
module.exports = Ajax;