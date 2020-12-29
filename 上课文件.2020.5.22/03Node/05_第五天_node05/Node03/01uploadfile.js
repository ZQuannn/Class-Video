const  http = require("http");
const  fd = require("formidable");
const  fs = require("fs");


const server = http.createServer(function (req, res) {
if(req.method == "POST"){
//文件上传的请求
    /*
    上传的文件数据,还是存储在req对象中!!!
    文件上传的原理:
    当文件从前端传递到后台是,实际上node会将其先放置在一个临时的文件夹中.我们需要做的就是通过req对象,从临时的文件夹中获取该文件,然后转移到目的文件夹中!!!
    1.通过req对象先拿到临时文件
    2.移动 将其放到我们想要放置的位置
    通过req获取对象,我们需要借助一个插件 formidable插件!!!
    */

    //1.创建文件上传对象
    let uploadObj = new fd.IncomingForm();
    //2.读取req对象里的传递的文件信息
    uploadObj.parse(req, function (error, fields, files) {
   /*
   error:错误信息
   fields:除了文件信息之外的配置信息  (不重要)
   files: 本次上传的文件的信息  (重要)
   */
        console.log("文件信息", files);
        //通过key键 获取文件信息对象
        let fileInfos = files.myFile;
        //文件名
        let filename = fileInfos.name;
        //临时路径
        let tempPath = fileInfos.path;
        //将文件从临时路径  转为 目的路径
        //node中移动文件的原理是通过fs模块,先从临时路径读取文件,再被文件写入目的路径!
        let readS = fs.createReadStream(tempPath);
        //目标路径    相对路径
        let targetPath =  filename; //以文件名为路径
        //写入目标路径中
        let  writeS = fs.createWriteStream(targetPath);
        readS.pipe(writeS); //注意!!!
    });


 res.end("ok");
}


});

server.listen(2324, function () {
  console.log("服务器加载完毕,端口2324监听中....");
})


//向服务器请求html文件和js文件!!!