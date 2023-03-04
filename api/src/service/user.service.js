const User = require('../model/use.model')

class UserService {
    async createUser(user_name, password) {
        //   插入数据
        // await表达式：promise对象的值
        const res = await User.create({user_name,password})
        // console.log(res);
       
        return res.dataValues
    }

    async getUerInfo({id,user_name,password,is_admin}){
        const whereOpt = {}

        id && Object.assign(whereOpt,{id})
        user_name && Object.assign(whereOpt,{user_name})
        password && Object.assign(whereOpt,{password})
        is_admin && Object.assign(whereOpt,{is_admin})

       const res=await User.findOne({
            attributes:['id','user_name','password','is_admin'],
            where:whereOpt
        })

        return res ? res.dataValues : null
    }
    async updateById({id,user_name,password,is_admin}){
        const whereOpt = {id}
        const newUser = {}

        user_name && Object.assign(newUser,{user_name})
        password && Object.assign(newUser,{password})
        is_admin && Object.assign(newUser,{is_admin})

        
        const res = await User.update(newUser,{where:whereOpt})
        // console.log(res);
        return res[0] > 0 ? true:false
    }
    async findGoods(pageNum, pageSize) {
      

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await User.findAndCountAll({
            offset: offset,
            limit: pageSize * 1
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }
    async removeGoods(id) {
        const res = await Goods.destroy({ where: { id } })


        return res > 0 ? true : false
    }
    // async removeCarts(ids){
    //     return await  User.destroy({
    //           where:{
    //              id: {
    //                    [Op.in]:ids,
    //               }
                 
    //           }
    //       })
    //   }
}

module.exports = new UserService()