const db_connection = require("../database/db_connection");

module.exports=(id,cb)=> {
  db_connection.query(
    'select city_name, city_pop, city_area from city where id = $1',[id], (error, result)=>{
    if (error){
        cb(error);
    }else {
      cb(null,result.rows);
    }
  });
};
