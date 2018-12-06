const fs = require('fs');

const db_connection = require("./db_connection")
const build_file = fs.readFileSync(__dirname + "/db_build.sql", "utf8");

const runDbBuild= (cb)=>{

  db_connection.query(build_file, (error, result)=>{
    if (error) {
      console.log("Failed", error);
    }else {
      console.log("Success!");
    }
  });
}
module.exports = runDbBuild;