const rstController = require('../controller/rst')

module.exports = (app, router) => {
    router.get('/shopDetail', rstController.getShopDetail)
    router.post('/getNewRst', rstController.saveNewRst)
}
