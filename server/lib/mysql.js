const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

function query(sql, values) {
  return new Promise((resolve, reject) => {
    // 获取连接
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        // console.log(sql)
        // 数据库查询
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          // 释放连接
          connection.release()
        })
      }
    })
  })
}

// 建库
const userTable = `create table if not exists user(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL COMMENT '用户名',
  phone VARCHAR(100) NOT NULL COMMENT '手机号',
  password VARCHAR(100) NOT NULL COMMENT '密码',
  avatar VARCHAR(100) NOT NULL COMMENT '头像',
  logintime VARCHAR(100) NOT NULL COMMENT '登录时间',
  address JSON COMMENT '收货地址',
  PRIMARY KEY (id))`.replace(/[\r\n]/g, '')

const rstTabele = `create table if not exists rsts(
  id VARCHAR(100) NOT NULL PRIMARY KEY COMMENT '店铺 ID',
  menu JSON NOT NULL COMMENT '菜单',
  restaurant JSON NOT NULL COMMENT '店铺信息'
)`

const orderTable = `create table if not exists orders(
  id INT AUTO_INCREMENT PRIMARY KEY,
  restId VARCHAR(100) NOT NULL COMMENT '店铺 ID',
  restName VARCHAR(100) NOT NULL COMMENT '店铺名称',
  restImg VARCHAR(100) NOT NULL COMMENT '店铺图片路径',
  created_timestamp VARCHAR(100) NOT NULL COMMENT '创建时间',
  cartList JSON NOT NULL COMMENT '购物车'  
)`

const createTable = (sql) => {
  return query(sql, [])
}

createTable(userTable)
createTable(rstTabele)
createTable(orderTable)


module.exports = {
  createTable
}