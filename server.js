const net = require('net');
const fs = require('fs');
// 创建客户端socket
const socket = net.createConnection(8885, '127.0.0.1');

// 向服务器发送数据
fs.readFile('./源文件.jpg', (err, data) => {
    if (err) {
        return console.log(err.message);

    }
    socket.write('文件上传成功');
})


// 读取服务器发来的数据
socket.on('data', (data) => {
    console.log(`服务器发来的数据:${data.toString()}`);

})