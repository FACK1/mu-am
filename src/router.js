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
    // to do get cities and set data 
    //-----Error Endpoint-------------------------------------------------------
    else {
            handlers.errorNotFound(request,response)
    }

    }
  module.exports = router
