process.on('exit',function (code) {
    setTimeout(function () {
        console.log("不会执行")
    },0);
    console.log("code=" +code);
});
console.log("程序执行结束");