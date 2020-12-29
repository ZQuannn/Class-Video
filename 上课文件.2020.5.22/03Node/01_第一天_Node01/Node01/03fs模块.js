/*
fs模块, 专门处理文件的模块
*/

//1.引入fs模块 require
const fs = require("fs");
//------**************************************************
//node建议,我们在操作文件的时候,设置文件的路径为绝对路径.
//可以引入path模块  专门处理路径的模块
const  path = require("path");
//拼接路径  let同var 都是一个变量的修饰符
let newsPath = path.resolve(__dirname, "news.txt");
console.log(newsPath);
//以下两个是全局变量  node提供的   在工程任意位置都可使用
console.log(__dirname);//文件夹路径  是当前文件上一级文件夹的绝对路径
console.log(__filename);//当前文件的绝对路径
//D:\工程代码\03Node\Node01\news.txt 从磁盘里面出来的是绝对路径
// news.txt  相对于当前工程而言的是相对路径
//---------------------******************************
//2.读取文件  异步读取方式
//file文件    dir(director)目录,文件夹
//带有sync的方法是同步读取  不带sync的是异步读取
fs.readFile(newsPath, "utf-8", function (error, data) {
//注意,参数1就是读取失败的原因;  参数2:是读取成功的数据
   console.log(data);
});
console.log("123334444");

//3.同步读取文件
// let data = fs.readFileSync(newsPath, "utf-8");
// console.log(data);
// console.log("123444555");
