const rstModel = require('../models/rsts')

const getShopDetail = async (ctx) => {
    const id = ctx.query.shop_id
    await rstModel.findOne({
        where: {
            id
        }
    }).then(proj => {
        ctx.body = proj
    })
}

const saveNewRst = async (ctx) => {
    const data = ctx.request.body.data
    await rstModel.upsert({
        id: data.rst.id,
        menu: data.menu,
        restaurant: data.rst
    }).then(() => {
        ctx.status = 200
    })
}

module.exports = {
    getShopDetail,
    saveNewRst
}