const addrController = require('../controller/address')

module.exports = (router) => {
    router.get('/address', addrController.getAddr)
    router.post('/address', addrController.saveAddr)
}