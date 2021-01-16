// for /nothing  a page where user can enter data which we can save somewhere...



const http = require('http');
const fs = require('fs');
// fs - file system.

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', );
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
})

server.listen(8000);