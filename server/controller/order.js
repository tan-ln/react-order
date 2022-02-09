const orderModel = require('../models/order')

const saveOrder = async (ctx) => {
    const { restId, restImg, restName, cartList, created_timestamp } = ctx.request.body.order
    await orderModel.upsert({
        restId,
        restName,
        restImg,
        cartList,
        created_timestamp
    }).then(() => {
        ctx.body = {
            code: '200',
            message: 'success'
        }
    })
}

const findAllOrders = async (ctx) => {
    await orderModel.findAll().then(proj => {
        console.log(proj.length)
        ctx.body = proj
    })
}

module.exports = {
    saveOrder,
    findAllOrders
}