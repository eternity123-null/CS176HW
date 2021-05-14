const http = require("http")
const url = require("url")
const mime = require("mime")
const fs = require("fs")
const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true)
    const abspath = process.cwd() + pathname
    fs.stat(abspath, handleRequest)
  
    // 判断是文件还是文件夹
    function handleRequest(err, statObj) {
      if (err || statObj.isDirectory()) return sendError(err)
      res.setHeader("Cache-Control","max-age=10");
    
      sendFile()
    }
    // 响应错误请求
    function sendError(error) {
      res.statusCode = 404
      res.end(`Not Found \r\n ${error.toString()}`)
    }
    // 响应文件请求
    function sendFile() {
      res.setHeader("Content-Type", mime.getType(abspath) + ";charset=utf-8")
      fs.createReadStream(abspath).pipe(res)
    }
  })
  
  server.listen(3000, () => console.log("serving http://localhost:3000"))
