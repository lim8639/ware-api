// 1.导入koa-router
const Router = require('koa-router')
// 2.实例化对象
const router = new Router({ prefix: '/address' })

// 中间件和控制器
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/addr.middleware')

const {create,findAll,update,remove,setDefault} =require('../controller/addr.controller')

// 3.编写路由规则
// 3.1添加接口：登录，格式
router.post('/',
    auth,
    validator({
        consignee: 'string',
        phone: { type: 'string', format: /^1\d{10}$/ },
        address: 'string',
    }),
    create
    )
// 3.2获取地址列表
router.get('/',auth,findAll)

// 3.3更新地址
router.put('/:id',auth,validator({
    consignee:'string',
    phone: { type: 'string', format: /^1\d{10}$/ },
    address: 'string',
}),
update
)

// 3.4删除地址
router.delete('/:id',auth,remove)

// 3.5设置默认
router.patch('/:id',auth,setDefault)



// 4.导出router对象
module.exports = router