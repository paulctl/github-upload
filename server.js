const http = require('http')
const server = http.createServer((req, res)=>{
console.log('JS: New connection')
res.end('PORT - Hello response  *****************************')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('JS: Listening'))
