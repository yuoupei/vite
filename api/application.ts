/*
 * @Author: yutao 15600279778@163.com
 * @Date: 2023-04-26 09:14:01
 * @LastEditors: yutao 15600279778@163.com
 * @LastEditTime: 2023-04-26 09:54:22
 * @FilePath: /energyplat-portal-web/src/api/application.ts
 * @Description:
 */
import service from "@/utils/service";
// 查询应用列表
export const getApplications = () => {
	return service({
		url: '/portal/applications',
		method: 'get'
	})
}
// 查询应用下拉
export const getApplicationsBase = () => {
	return service({
		url: '/portal/applications/base',
		method: 'get'
	})
}

// 查询企业应用列表
export const getApps = (params: any) => {
	return service({
		url: '/portal/applications/enterprises/apps',
		method: 'get',
		params
	})
}
// 查询企业应用详细信息
export const getAppsId = (entNo: any) => {
	return service({
		url: `/portal/applications/enterprises/${entNo}/apps`,
		method: 'get',
		params:{entNo:entNo}
	})
}
export const createApp = (entNo: any,data:any) => {
	return service({
		url: `/portal/applications/enterprises/${entNo}/apps`,
		method: 'post',
		data:data
	})
}

export const editApp = (entNo: any,data:any) => {
	return service({
		url: `/portal/applications/enterprises/${entNo}/apps`,
		method: 'put',
		data:data
	})
}

