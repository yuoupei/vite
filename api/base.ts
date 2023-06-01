import service from "@/utils/service";
// 获取用户信息
export const getUserInfo = () => {
	return service({
		url: `/portal/user/auth/getUserInfo`,
		method: 'get'
	})
}
// 是否登录过
export const checkIdm = () => {
	return service({
		url: `/portal/user/auth/login/checkIdm`,
		method: 'get'
	})
}
// 退出登录
export const logout = () => {
	return service({
		url: `/portal/user/auth/logout`,
		method: 'get'
	})
}
// 查询数据字典列表
export const getDictionaries = () => {
	return service({
		url: `/portal/metas/dictionaries`,
		method: 'get'
	})
}
// 根据父级编号查询数据字典子表数据
export const getDictCodeItems = (dictCode: String) => {
	return service({
		url: `/portal/metas/dictionaries/${dictCode}/items`,
		method: 'get',
	})
}
