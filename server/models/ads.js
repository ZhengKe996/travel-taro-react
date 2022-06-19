const express = require("express");

const sqlQuery = require("../db/mysql");

const router = express.Router();

const imgLists = [
  "https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/iwork/banner/01.png",
  "https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/iwork/banner/02.png",
];
const createTable = async () => {
  try {
    const createTableSql = `
    create table if not exists ads(
      id int auto_increment,
      imgUrl char(255) not null,
      primary key (id)
    ) engine=innodb;
    `;
    await sqlQuery(createTableSql);
    for (let i = 0; i < imgLists.length; i++) {
      const insertSql = `insert into ads(id,imgUrl) values(null,'${imgLists[i]}')`;
      await sqlQuery(insertSql);
    }
  } catch (err) {
    console.log(err);
  }
};

// createTable();
router.get("/advertising", async (req, res) => {
  const strSql = `select * from ads`;
  try {
    const result = await sqlQuery(strSql);
    res.send({
      code: 1,
      message: "请求成功",
      data: result,
    });
  } catch (err) {
    res.send({
      code: 0,
      message: "请求失败",
      data: "",
    });
  }
});

module.exports = router;
