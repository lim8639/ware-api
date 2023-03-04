const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Goods = seq.define('xmf_goods', {
    goods_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品名称'
    },
    goods_author: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品作者'
    },
    goods_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment: '商品价格',
    },
    goods_classify: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品分类（1：文学，2：哲学，3：理工，4：数学，5：计算机）',
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品库存',
    },
    goods_introduce:{
        type:DataTypes.TEXT,
        allowNull:false, 
        comment:'商品简介',
    },
    goods_img: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '商品图片的url',
    },
},
    {
        paranoid: true
    }
)

// Goods.sync({force:true})

module.exports = Goods