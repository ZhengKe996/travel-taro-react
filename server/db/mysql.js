const mysql = require("mysql2");

const options = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "123456",
  database: "travel_taro",
};

// 创建数据库连接
const connection = mysql.createConnection(options);

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("数据库连接成功");
});

const sqlQuery = (strSql) => {
  return new Promise((resolve, reject) => {
    connection.query(strSql, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports = sqlQuery;
