import service from "@/utils/service";
// 查询用户列表
export const getUsers = (params: any) => {
	return service({
		url: '/portal/users',
		method: 'get',
		params
	})
}
// 更新用户类型
export const putUsersId = (userId: number, newType: string) => {
	return service({
		url: `/portal/users/${userId}/${newType}`,
		method: 'put'
	})
}
