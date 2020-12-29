/*
http模块 可以通过该模块  来维护一个服务器!
*/

//1.引入模块
const http = require("http");
//2.创建服务对象,并设置监听的回调函数
const  server = http.createServer(function (req, res) {
    //该函数会在前端发起请求服务的时候触发
    console.log("服务器被请求了....");
    //参数1:req 请求对象,存储本次请求的所有数据
    //参数2:res 是服务器响应对象,用于处理本次请求的响应
    res.end("success finished!");
});

//3.设置端口号   开启监听,端口号的范围是0--65535, 建议用1000以后的端口号
server.listen(6789, function () {
//该函数会在服务器启动之后触发
    console.log("服务器搭建完毕,listening.....");
});


