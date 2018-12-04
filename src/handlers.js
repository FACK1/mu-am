
// -- required --------------------------
const path = require('path');
const fs = require('fs');

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


// -- Export handlers -------------------
module.exports = {errorNotFound , homeHandler, publicHandler}