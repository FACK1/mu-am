const db_connection = require("../database/db_connection");

module.exports=(cb)=> {
  db_connection.query(
    'select id, city_name from city', (error, result)=>{
    if (error){
        cb(error);
    }else {
      cb(null,result.rows);
    }
  });
};
