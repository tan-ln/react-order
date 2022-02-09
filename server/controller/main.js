const rstModel = require('../models/rsts')
const rstData = require('../lib/rsts')

const getRsts = async (ctx) => {
    // initRstTable()
    await rstModel.findAll({
        attributes: ['restaurant']
    }).then(proj => {
        const data = proj.splice(-10).reverse()
        ctx.body = data
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: 'error'
        }
        console.log(err)
    })
}

const formatData = (data) => {
    return data.map((item) => {
        return {
            id : item.rst.id,
            menu: item.menu,
            restaurant: item.rst
        }
    })
}

const initRstTable = () => {
    rstModel.count().then(num => {
        console.log(num)
        if (num === 0) {
            rstModel.bulkCreate(formatData(rstData))
        }
    })
}

module.exports = {
    getRsts
}
