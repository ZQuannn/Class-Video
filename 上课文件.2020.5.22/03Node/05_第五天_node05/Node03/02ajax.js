const  http = require("http");
const  url = require("url");
const  fs = require("fs");
const  qs = require("querystring");
// let userArray = new Array();

http.createServer(function (req, res) {
  //注册
    // let  user = {name:query.name, passwd:query.passwd};
    // userArray.push(user);
//登录  遍历数组


    let urlObj = url.parse(req.url, true);
     let pathname = urlObj.pathname;
     console.log(pathname);
    if (req.method == "GET" ) {
    //处理默认的get请求  \转义字符 不具备任何意义
        if(/^\/.+\.(html|js|ico|png|jpg|css|jpeg)$/.test(pathname)){
            /*
            /01-ajax.html
            /02ajax.html
            /favicon.ico
            /node_modules/jquery/jquery.min.js
            /xxxx.css
            /xxx.png
            */
            //读取静态文件 并且返回
            let readObj = fs.createReadStream("." + pathname);
            readObj.pipe(res);
        }else if(pathname == "/ajaxGet"){
              res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            if (urlObj.query.username == "韩愈" && urlObj.query.password == "666") {
                res.write("1");
            }else{
                res.write("0");
            }
            res.end();
        }else if (pathname == "/ajaxJSONP"){
            //依次获取数据
           let name = urlObj.query.username;
           let passwd = urlObj.query.password;
           let funName = urlObj.query.cb;
           //定义变量  接收要返回给前端的数据
           let resData;
           if(name == "王维" && passwd == "888"){
               resData = {
                   msg:"ok",
                   img:"http://127.0.0.1:4567/images/ok.jpg"
               };
           }else{
               resData = {
                   msg:"error",
                   img:"http://127.0.0.1:4567/images/error.jpg"
               };
           }
            // "getData(json数据)"  返回给前端
            let funCallBackStr = funName + "(" + JSON.stringify(resData) + ")";
           res.end(funCallBackStr);

        }

    }else if(req.method == "POST"){
        //判断路由  (将来项目中同一页面可能有多个post请求)
        if(pathname == "/ajaxPost"){
            res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            //设置变量 用于接收前端传来的数据
            let allData = "";
            req.on("data", function (chunk) {
              allData += chunk;
            });
            req.on("end", function () {
             //说明数据传递结束
                let queryObj = qs.parse(allData);
                //设置变量  存储要返回给前端的数据
                let resData = "";
                if(queryObj.username == "王维" && queryObj.password == "999"){
                    resData = {
                        msg:"ok",
                        data:[
                            {id:1, title:'标题1', content:'内容1'},
                            {id:2, title:'标题2', content:'内容2'},
                            {id:3, title:'标题3', content:'内容3'},
                        ]
                    };
                }else{
                    resData = {
                        msg:"error",
                        data:[]
                    };
                }
               //向前端返回resData对象,但是只能返回其对应的json字符串格式!!!
                let jsonStr = JSON.stringify(resData);
                res.end(jsonStr);

            })

        }
    }


}).listen(4567, function () {
    console.log("服务器加载完毕,开始监听....");
});