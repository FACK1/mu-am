//-- Import Modules -----------------------------------------------------------
const fs = require('fs')
const path = require('path');
const handlers = require('./handlers.js');

//------Create Router-----------------------------------------------------------
const router = (request, response)=> {

//----Home Endpoint-------------------------------------------------------------
      if (request.url === '/') {
            handlers.homeHandler(request,response)
      }
    //----Public Side Endpoint-------------------------------------------------
    else if (request.url.includes('/public/')) {
            handlers.publicHandler(request,response)
    }
    //-----ADD POST Endpoint-----------------------------------------------------
    else if (request.url === '/addpost' && request.method=='POST'){
            handlers.addPostHandler(request,response)
   //-----GET CITY Endpoint-------------------------------------------------------
    } else if(request.url === '/getcities'){
        handlers.getCitiesHandler(request,response)
    }
    //-----GET CITY INFO Endpoint-------------------------------------------------------
    else if(request.url.includes('/getcitiesinfo')){
         handlers.getCitiesInfoHandler(request,response)
     }
    //-----Error Endpoint-------------------------------------------------------
    else {
            handlers.errorNotFound(request,response)
    }

    }
  module.exports = router
