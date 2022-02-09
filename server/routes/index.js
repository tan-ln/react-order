const router = require('koa-router')() // 引入并实例化路由**推荐
const user = require('./user')
const rst = require('./rst')
const order = require('./order')
const main = require('../controller/main')
const address = require('./address')

module.exports = function withRouter(app) {
  router.get('/', main.getRsts)

  user(app, router)
  rst(app, router)
  order(router)
  address(router)
  
  // 注册路由
  app.use(router.routes()).use(router.allowedMethods())
}
