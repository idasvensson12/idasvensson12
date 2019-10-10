const {createServer} = require('http');
const {createReadStream} = require('fs');

const sendFile = (response, status, type, filePath) => {
response.writeHead(status, { "Content-Type": type });
createReadStream(filePath).pipe(response);
};


createServer((request, response) =>{
   switch (request.url){
       case "/":
         return sendFile(response, 200, "text/html", "./client/flexbox.html")
 
 
    }
}).listen(3000);