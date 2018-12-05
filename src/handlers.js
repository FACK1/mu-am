
// -- required --------------------------
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

// const data = require('./queries/getData');
const setData = require('./queries/setData');

// -- Error 404 -------------------------
const errorNotFound = (request, response) => {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('<h1>Page Not Found : Error 404</h1>');
};

// -- Home Handler ----------------------
const homeHandler = (request, response) => {
    const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(htmlPath, (error, htmlPath) => {
        if(error){
            response.writeHead(500, {'Content-Type' : 'text/html'});
            response.end('<h1>Error on server : Error 500</h1>');
        }
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(htmlPath);
    });
};

// -- public Handler --------------------
const publicHandler = (request, response) => {
    const extention = request.url.split('.')[1];
    const contentTypeMapping = {
        html : 'text/html',
        css  : 'text/css',
        js   : 'application/js'
    };
    if(!contentTypeMapping[extention]){
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.end('<h1>Page Not Found : Erorr 404</h1>');
    } else {
        const filePath = path.join(__dirname, '..', request.url);
        fs.readFile(filePath, (error, file) => {
            if(error){
                response.writeHead(500, {'Content-Type' : 'text/html'});
                response.end('<h1>Error on server : Error 500</h1>');
            }
            response.writeHead(200, {'Content-Type' : contentTypeMapping[extention]});
            response.end(file);
        });
    };
};

// -- ADD POST Handler ------------------------
const addPostHandler = (request,response) =>{
  let body='';
  request.on('data', chunk =>{
    body+= chunk.toString();
  });
  request.on('end', ()=>{
    let {cityID, visitorName, postContent} = querystring.parse(body);
    //  insert to db
    setData(cityID, visitorName, postContent, (error)=>{
      if (error) {
          response.writeHead(500, {'content-type': 'text/html'});
          response.end('<h1> Server has moshkole </h1>')
          console.log(error);
      }else {
          response.writeHead(302, {'Location': '/'});
          response.end();
      }
    });
  });
}
// -- Export handlers -------------------
module.exports = {errorNotFound , homeHandler, publicHandler, addPostHandler}
