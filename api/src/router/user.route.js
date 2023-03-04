const Router = require('koa-router')

const {
    userValidator,
    verifyUser,
    crpytPassword,
    verifyLogin,
    validator
} = require('../middleware/user.middleware')

const { auth } = require('../middleware/auth.middleware')
const { register, login,changePassword ,findAll} = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, crpytPassword, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 修改密码
router.patch('/', auth,crpytPassword,changePassword)


// 获取商品列表
router.get('/',findAll)

// 删除用户
// router.delete('/', auth, validator({ ids: 'array' }), remove)
// router.delete('/:id',auth,hadAdminPermission,remove)
// router.delete('/:id',auth,hadAdminPermission,remove)

module.exports = router