console.log("hello world");
/*
Node.js不是编程语言,只是javaScript的一个编译环境.我们在这个编译环境中依然正常写js语法代码!
1.在没有node.js环境的时候,我们的js文件都依托于html也就是浏览器加载运行,无法进行单独操作
2.js缺少一些I/O操作(也就是数据处理操作!)
java语言,php语言等 都可以处理数据!

Node的特点:
1.非阻塞方式的异步I/O
例子:访问数据库,如果数据量庞大,就需要一段时间,在传统的单线程处理机制中,该线程会在处理数据库操作的时候,使后面的线程任务停止.一至到该线程处理数据结束以后,才会让后面的线程任务继续执行.所以本质上I/O就是阻塞状态并且执行效率很低!
而Node也是单线程,但是node在执行一个任务时,例如访问数据库,会将所有任务同时执行,只不过会把执行结果暂存起来放在"回调函数"中,等待调用即可!相对而言效率较高!

2.单线程,异步回调
java, php, .net这些服务端的语言,会为每一个请求任务开辟一个线程.多线程任务之间互不影响分别执行.但是每个线程执行任务过程中大概需要消耗2M空间内存,例如:一个8G的服务器允许同时连接4000个请求任务.如果要支持更多的用户,就需要增加服务器的数量,也会提高成本.
但是Node不会为每个请求任务开辟线程,而是仅仅使用一个线程.当有用户连接服务器时,触发一个内部事物,通过非阻塞式的I/O和回调函数保证事物的执行.那么理论上一个8G的服务器,可以同时支持4万个用户的连接

3.事件驱动
node是单线程,所以node采用的是事件循环机制.内部拥有一个infinity loop,每当有新的连接任务进入时.node会将其先放在事件循环中.单行执行完一个,从循环里再取出一个任务.

4.兼容性好,跨平台
单线程的弊端：
1.无法充分利用多核cpu
2.因是单线程所以一旦程序错误,就会导致整个应用程序退出
3.如果进行大量的计算或者很耗时的需求,就会导致node延迟

node的适用场景:
处理高并发,低逻辑的请求任务!!!

重点:
Node.js有的而javaScript中没有的?
1.Node里面有模块化的概念.Node是把每一个类功能都封装成了一个模块(其实就是一个文件)提供使用!!!
2.node里面采用了CommonJS规范
3.Node为我们提供了npm(包管理器),可以让我们快速方便的管理第三方库!

 */


