
const db_connection = require("../database/db_connection");

module.exports=(city_id, name_visitor, post_content, cb)=> {
  if (name_visitor) {
    db_connection.query(
      'INSERT INTO post (city_id, name_visitor, post_content) values ($1, $2, $3)',
      [city_id, name_visitor, post_content], (error)=>{
      if (error){
          cb(error);
      }else {
        cb(null);
      }
    });
  }else {
    db_connection.query(
      'INSERT INTO post (city_id, post_content) values ($1, $2)',
      [city_id, post_content], (error)=>{
      if (error){
          cb(error);
      }else {
        cb(null);
      }
    });
  }

};
