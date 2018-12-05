const db_connection = require("../database/db_connection");

module.exports=(id,cb)=> {
  db_connection.query(
    'select id,city_name, city_pop, city_area from city where id = $1',[id], (error, result)=>{
    if (error){
        cb(error);
    }else {
      db_connection.query('select name_visitor, post_content from post where city_id = $1',[id],(err,res)=>{
        if (err){
          cb(err);
          console.log(err)
      }else {
        console.log(res)
        result.rows.push(res.rows)
        cb(null,result.rows)};
      })
    }
  });
};
