import { post, get,put, del} from "./service"

// 登录
export const loginApi = data => {
    return post({
        url: "/users/login",
        data
    })
}
// 注册
export const registerApi = data => {
    return post({
        url: "/users/register",
        data
    })
}

// export const productListApi = data => {
//     return get({
//         url: "/goods",
//         data
//     })
// }
// 获取商品列表
export const productListApi = async (query) => {
    return await get({
        url: `/goods`,
        params: query
    });
};

// 下架商品
export const outCommodityApi = data => {
    return post({
        url: `/goods/${data}/off`,
        // data
    })
}

// 发布商品
export const onCommoditiesApi = data => {
    return post({
        url: "/goods",
        data
    })
}

// 修改商品
export const modifyGoodsApi = (id,shangpin) => {
    console.log('接受参数',id,shangpin);
    return put({
        url: '/goods/'+id,
        data:shangpin
    })
}

// 获取订单列表
export const orderListApi = data => {
    return get({
        url: "/orders",
        data
    })
}

// 获取订单列表
export const userListApi = data => {
    return get({
        url: "/users",
        data
    })
}

// 加入购物车
export const upGoodsCartsApi = data => {
    return post({
        url: "/carts",
        data
    })
}

// 获取购物车列表
export const getGoodsCartsListApi = data => {
    return get({
        url: "/carts",
        data
    })
}

// 删除购物车
export const removeCartsApi = data => {
    return del({
        url: "/carts",
        data
    })
}