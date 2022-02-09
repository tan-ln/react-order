const md5 = require('md5')
const UserModel = require('../models/user')
// 需要引入执行  创建 user 表
const createUser = require('../lib/mysql')

const postLogin = async (ctx) => {

  const { phone, password } = ctx.request.body
  const pwd = md5(password)
  let username = Math.random().toString(16).substring(2),
    logintime = Date.parse( new Date()),
    avatar = 'default'
  
  await UserModel.findOrCreate({
    where: {
      phone
    },
    defaults: {
      password: pwd,
      username,
      logintime,
      avatar,
      address: null
    }
  }).spread(function (user, created) {
    const rec = user.get({
      plain: true
    })
    if (created) {
      ctx.status = 201
      ctx.body = {
        message: 'signUp',
        user: rec
      }
    } else {
      if (rec.password === pwd) {
        ctx.body = {
          code: 200,
          message: 'login',
          user: rec
        }
      } else {
        ctx.body = {
          code: 400,
          message: 'pwdWrong'
        }
      }
    }
  })
}

module.exports = {
  postLogin
}