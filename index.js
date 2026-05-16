import http from 'node:http';
import fs from 'fs';
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const url = new URL(req.url ,`https://${req.headers.host}/`);
    if (url.pathname === '/'){
      handleResponse('/index', res);
    }
    else if (url.pathname === '/about' || url.pathname === '/contact'){
      handleResponse(url.pathname, res)
    }
  else {
      handleResponse('/404', res, 404)
  }
    
}); 

server.listen(8000);


function handleResponse(pathname, res, status = 200){
   fs.readFile(`.${pathname}.html`, (err, data) => {
      res.writeHead(status, { 'Content-Type': 'text/html' });
      res.write(data);  
      res.end()
    })
}