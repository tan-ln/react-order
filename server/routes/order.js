const orderController = require('../controller/order')

module.exports = (router) => {
    router.get('/getOrders', orderController.findAllOrders)
    router.post('/saveOrder', orderController.saveOrder)
}