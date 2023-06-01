import service from "@/utils/service";
import type { BasicFetchResult } from '@/api/model/base.model'
// 设备分类
// 查询设备类型列表
export const getMetaDevices = (params: any) => {
	return service<BasicFetchResult>({
		url: '/portal/metas/devices',
		method: 'get',
		params
	})
}
// 新增设备类型
export const postMetaDevices = (data: any) => {
	return service({
		url: `/portal/metas/devices`,
		method: 'post',
		data
	})
}
// 查询设备类型详细信息
export const getMetaDevicesId = (typeId: any) => {
	return service({
		url: `/portal/metas/devices/${typeId}`,
		method: 'get',
	})
}
// 更新设备类型
export const putMetaDevicesId = (typeId: any, data: any) => {
	return service({
		url: `/portal/metas/devices/${typeId}`,
		method: 'put',
		data
	})
}
// 删除设备类型
export const delMetaDevicesId = (typeId: any) => {
	return service({
		url: `/portal/metas/devices/${typeId}`,
		method: 'delete',
	})
}
// 查询设备大类列表
export const getDevicesGroups = () => {
	return service({
		url: '/portal/metas/devices/groups',
		method: 'get'
	})
}
// 新增设备大类
export const postDevicesGroups = (data: any) => {
	return service({
		url: `/portal/metas/devices/groups`,
		method: 'post',
		data
	})
}

// 能源系统类型
// 查询系统类型列表
export const getMetaSystems = (params: any) => {
	return service<BasicFetchResult>({
		url: '/portal/metas/systems',
		method: 'get',
		params
	})
}
// 新增系统类型
export const postMetaSystems = (data: any) => {
	return service({
		url: `/portal/metas/systems`,
		method: 'post',
		data
	})
}
// 查询系统类型详细信息
export const getMetaSystemsId = (typeId: any) => {
	return service({
		url: `/portal/metas/systems/${typeId}`,
		method: 'get',
	})
}
// 更新系统类型
export const putMetaSystemsId = (typeId: any, data: any) => {
	return service({
		url: `/portal/metas/systems/${typeId}`,
		method: 'put',
		data
	})
}
// 删除系统类型
export const delMetaSystemsId = (typeId: any) => {
	return service({
		url: `/portal/metas/systems/${typeId}`,
		method: 'delete',
	})
}

// 查询系统固有属性列表
export const getMetasSysAttributes = (typeCode: any, params: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/attributes`,
		method: 'get',
		params
	})
}
// 新增系统固有属性
export const postMetasSysAttributes = (typeCode: any, data: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/attributes`,
		method: 'post',
		data
	})
}
// 更新系统固有属性列表
export const putMetasSysAttributes = (typeCode: any, attrId: any, data: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/attributes/${attrId}`,
		method: 'put',
		data
	})
}
// 删除系统固有属性
export const delMetasSysAttributes = (typeCode: any, attrId: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/attributes/${attrId}`,
		method: 'delete'
	})
}
// 查询系统指标属性列表
export const getMetasSysIndicatorAttr = (typeCode: any, params: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/indexes`,
		method: 'get',
		params
	})
}
// 新增系统指标属性
export const postMetasSysIndicatorAttr = (typeCode: any, data: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/indexes`,
		method: 'post',
		data
	})
}
// 更新系统指标属性列表
export const putMetasSysIndicatorAttr = (typeCode: any, indexId: any, params: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/indexes/${indexId}`,
		method: 'put',
		params
	})
}
// 删除系统指标属性
export const delMetasSysIndicatorAttr = (typeCode: any, indexId: any) => {
	return service({
		url: `/portal/metas/systems/${typeCode}/indexes/${indexId}`,
		method: 'delete'
	})
}

// 单位管理
// 查询单位列表
export const getMetasUnits = (params: any) => {
	return service({
		url: `/portal/metas/units`,
		method: 'get',
		params
	})
}
// 新增单位
export const postMetaUnits = (data: any) => {
	return service({
		url: `/portal/metas/units`,
		method: 'post',
		data
	})
}
// 更新单位
export const putMetaUnitsId = (unitId: any, data: any) => {
	return service({
		url: `/portal/metas/units/${unitId}`,
		method: 'put',
		data
	})
}
// 删除单位
export const delMetaUnitsId = (unitId: any) => {
	return service({
		url: `/portal/metas/units/${unitId}`,
		method: 'delete',
	})
}


// 属性管理
// 查询固有属性列表
export const getMetasAttributes = (params: any) => {
	return service({
		url: `/portal/metas/attributes`,
		method: 'get',
		params
	})
}
// 新增固有属性
export const postMetasAttributes = (data: any) => {
	return service({
		url: `/portal/metas/attributes`,
		method: 'post',
		data
	})
}
// 查询固有属性详细信息
export const getMetasAttributesId = (attrId: any) => {
	return service({
		url: `/portal/metas/attributes/${attrId}`,
		method: 'get',
	})
}
// 更新固有属性
export const putMetasAttributesId = (attrId: any, data: any) => {
	return service({
		url: `/portal/metas/attributes/${attrId}`,
		method: 'put',
		data
	})
}
// 删除量测属性
export const delMetasAttributesId = (attrId: any) => {
	return service({
		url: `/portal/metas/attributes/${attrId}`,
		method: 'delete',
	})
}
// 查询量测属性列表
export const getMetasMetrics = (params: any) => {
	return service({
		url: `/portal/metas/metrics`,
		method: 'get',
		params
	})
}
// 新增量测属性
export const postMetasMetrics = (data: any) => {
	return service({
		url: `/portal/metas/metrics`,
		method: 'post',
		data
	})
}
// 更新量测属性
export const putMetasMetricsId = (metricId: any, data: any) => {
	return service({
		url: `/portal/metas/metrics/${metricId}`,
		method: 'put',
		data
	})
}
// 删除量测属性
export const delMetasMetricsId = (metricId: any) => {
	return service({
		url: `/portal/metas/metrics/${metricId}`,
		method: 'delete',
	})
}
// 查询指标属性列表
export const getMetasIndexes = (params: any) => {
	return service({
		url: `/portal/metas/indexes`,
		method: 'get',
		params
	})
}
// 新增指标属性
export const postMetasIndexes = (data: any) => {
	return service({
		url: `/portal/metas/indexes`,
		method: 'post',
		data
	})
}
// 更新指标属性
export const putMetasIndexesId = (indexId: any, data: any) => {
	return service({
		url: `/portal/metas/indexes/${indexId}`,
		method: 'put',
		data
	})
}
// 删除指标属性
export const delMetasIndexesId = (indexId: any) => {
	return service({
		url: `/portal/metas/indexes/${indexId}`,
		method: 'delete',
	})
}

// 查询数值类型
export const getMetasValueTypes = () => {
	return service({
		url: `/portal/metas/valueTypes`,
		method: 'get'
	})
}
// 查询数据类型
export const getMetasDataTypes = () => {
	return service({
		url: `/portal/metas/dataTypes`,
		method: 'get'
	})
}

// 设备属性
export const getMetasTcTree = (params: any) => {
	return service({
		url: `/portal/metas/devices/tree`,
		method: 'get',
		params
	})
}
// 查询设备固有属性列表
export const getMetasTcAttributes = (typeCode: any, params: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/attributes`,
		method: 'get',
		params
	})
}
// 新增设备固有属性
export const postMetasTcAttributes = (typeCode: any, data: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/attributes`,
		method: 'post',
		data
	})
}
// 删除固有属性
export const delMetasTcAttributes = (typeCode: any, attrId: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/attributes/${attrId}`,
		method: 'delete',
	})
}
// 查询设备量测属性列表
export const getMetasTcMetrics = (typeCode: any, params: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/metrics`,
		method: 'get',
		params
	})
}
// 新增设备量测属性
export const postMetasTcMetrics = (typeCode: any, data: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/metrics`,
		method: 'post',
		data
	})
}
// 删除量测属性
export const delMetasTcMetrics = (typeCode: any, attrId: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/metrics/${attrId}`,
		method: 'delete',
	})
}

// 查询设备指标属性列表
export const getMetasTcIndexes = (typeCode: any, params: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/indexes`,
		method: 'get',
		params
	})
}
// 新增设备指标属性
export const postMetasTcIndexes = (typeCode: any, data: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/indexes`,
		method: 'post',
		data
	})
}
// 删除指标属性
export const delMetasTcIndexes = (typeCode: any, indexId: any) => {
	return service({
		url: `/portal/metas/devices/${typeCode}/indexes/${indexId}`,
		method: 'delete',
	})
}
// 查询指标配置详情
export const getMetasIndexesDetail = (indexId: any) => {
	return service({
		url: `/portal/metas/indexes/${indexId}/detail`,
		method: 'get',
	})
}


// 查询固有属性处理
export const getMetaAttributes = (obj: any, params: any) => {
	return service({
		url: `/portal/metas/${obj.type}/${obj.metaTypeCode}/attributes`,
		method: 'get',
		params
	})
}
// 查询指标属性处理
export const getMetaIndexes = (obj: any, params: any) => {
	return service({
		url: `/portal/metas/${obj.type}/${obj.metaTypeCode}/indexes`,
		method: 'get',
		params
	})
}



