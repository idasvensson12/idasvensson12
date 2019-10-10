const {createServer} = require('http');
const {createServer} = require('http');

const sendFile = (response, status, type, filePath) => {
response.writehead(status, { "Content-Type": type });
createreadstream(filePath).pipe(response);
};


createServer((request, response) =>{
   switch (request.url){
       case "/":
         return 
 
 
    }








}