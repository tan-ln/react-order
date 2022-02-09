const Sequelize = require('sequelize')
const sequelize = require('./index')

// 数据表跟对象的映射 
const Order = sequelize.define('orders', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    autoIncrement:true
  },
  restId: {
    type: Sequelize.STRING
  },
  restImg: {
    type: Sequelize.STRING
  },
  restName: {
    type: Sequelize.STRING
  },
  cartList: {
    type: Sequelize.JSON
  },
  created_timestamp: {
    type: Sequelize.STRING
  }
})

module.exports = Order
