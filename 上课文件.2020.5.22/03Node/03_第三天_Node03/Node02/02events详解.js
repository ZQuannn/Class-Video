/*
events详解, 进行事件监听的模块
*/
//引入events模块
const  EventEmitter = require("events");
//创建事件监听对象
const  event = new EventEmitter();

/*
events模块,是node里众多模块的基类(可认为是父类),例如http模块,fs模块都是events模块的子类.
那么也就是说,http,fs这些模块都拥有events模块的属性和方法,可以直接调用events模块的方法和属性!!
*/

//情况1:设置监听,可以设置多个监听者,同时去监听同一个事件
event.on("oneEvent", function () {
console.log("这是第一个监听者,oneEvent被触发!");
});
event.on("oneEvent", function () {
    console.log("这是第二个监听者,oneEvent被触发!");
});

event.on("oneEvent", thirdEventsListener);
function thirdEventsListener () {
    console.log("这是第三个监听者,oneEvent被触发!");
}

event.on("oneEvent", fourEventsListener);


function fourEventsListener () {
    console.log("这是第四个监听者,oneEvent被触发!");
}
//触发事件
event.emit("oneEvent");
event.emit("oneEvent");

//情况2:可以设置一次性的监听
event.once("twoEvents", function () {
console.log("twoEvents被触发了");
});
event.emit("twoEvents");
event.emit("twoEvents");

//情况3:node里面对同一个事件设置的监听者的数量有限制吗??
event.setMaxListeners(11);

event.on("maxEvent", function () {
console.log(1);
});
event.on("maxEvent", function () {
    console.log(2);
});
event.on("maxEvent", function () {
    console.log(3);
});
event.on("maxEvent", function () {
    console.log(4);
});
event.on("maxEvent", function () {
    console.log(5);
});
event.on("maxEvent", function () {
    console.log(6);
});
event.on("maxEvent", function () {
    console.log(7);
});
event.on("maxEvent", function () {
    console.log(8);
});
event.on("maxEvent", function () {
    console.log(9);
});
event.on("maxEvent", function () {
    console.log(10);
});
//同一事件的监听对象最多设置10个监听者.如果超过10个,就要在第11个监听者之前使用setMaxListeners()方法提交监听者数量; 如果不提升,node就会显示造成的内存问题!

event.on("maxEvent", function () {
    console.log("哈哈哈哈");
});
event.emit("maxEvent");
