const {Pool} = require('pg');
require("env2")("config.env")

const {DATABASE_URL} = process.env;
if(process.env.NODE_ENV== 'test'){
  console.log('you are in test');
}
if (!DATABASE_URL) {
  throw Error ("No database URL");
}

const option = {
  connectionString: DATABASE_URL
};

module.exports = new Pool(option);
