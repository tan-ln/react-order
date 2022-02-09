const UserModel = require('../models/user')

const saveAddr = async (ctx) => {
    const { address, phone } = ctx.request.body
    await UserModel.update({ address }, {
        where: {
            phone
        }
    }).then(() => {
        ctx.body = {
            message: '保存地址成功'
        }
    })
}

const getAddr = async (ctx) => {
    const phone = ctx.request.body.phone
    await UserModel.findAll({
        attributes: ['address']
    }, {
        where: {
            phone
        }
    }).then(res => {
        console.log(res)
        ctx.body = res
    })
}

module.exports = {
    saveAddr,
    getAddr
}
