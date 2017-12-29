# plus-ajax
兼容`plus`方式的`ajax`请求
# NPM
    npm install plus-ajax
# 使用方式
与ajax的使用方式相似，同样提供 `get`和`post`调用

    Ajax.get('url',data).then(function(res){
        console.log(res)
    })