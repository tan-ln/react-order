const Sequelize = require('sequelize')
const sequelize = require('./index')

// 数据表跟对象的映射 
const Rsts = sequelize.define('rsts', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true
  },
  menu: { type: Sequelize.JSON },
  restaurant: { type: Sequelize.JSON }
})

module.exports = Rsts
