// 引入内置的 http 模块
const http = require('http');

// 创建服务器实例，回调函数处理请求
const server = http.createServer((req, res) => {
  // 处理不同 URL 路径
  if (req.url === '/') {
    // 设置响应头：状态码 200，内容类型为 text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // 返回响应内容
    res.end('<h1>Hello World! 这是首页</h1>');
  } else {
    // 处理未定义的路由（404）
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 页面不存在');
  }
});

// 设置监听端口和启动回调
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
