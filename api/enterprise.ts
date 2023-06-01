import service from "@/utils/service";
// 查询企业列表
export const getEnterprises = (params: any) => {
	return service({
		url: '/portal/enterprises',
		method: 'get',
		params
	})
}
// 查询企业详细信息
export const getEnterprisesId = (entId?: any) => {
	return service({
		url: `/portal/enterprises/${entId}`,
		method: 'get'
	})
}
// 新增企业
export const postEnterprises = (data: any) => {
	return service({
		url: '/portal/enterprises',
		method: 'post',
		data
	})
}
// 更新企业信息、更新企业状态
export const putEnterprises = (entId?: number, newStatus?: string) => {
	return service({
		url: `/portal/enterprises/${entId}/${newStatus}`,
		method: 'put'
	})
}
// 删除企业
export const delEnterprises = (entId?: number) => {
	return service({
		url: `/portal/enterprises/${entId}`,
		method: 'delete',
	})
}
// 更新企业信息
export const putEnterprisesInfo = (entId?: any, data?: any) => {
	return service({
		url: `/portal/enterprises/${entId}`,
		method: 'put',
		data
	})
}

// 查询用户列表
export const getUsers = (params: any) => {
	return service({
		url: '/portal/users',
		method: 'get',
		params
	})
}
