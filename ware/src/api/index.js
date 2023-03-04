// 注册接口
export const register = async () => {
    return await request({
        url: "http://localhost:8000/users/register",
        method: "post",
    });
};