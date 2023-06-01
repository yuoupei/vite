import service from "@/utils/service";
import type { ParamsGetTreesNo, ParamsCreatNode, ParamsDeleteTrees ,ParamsAttributes} from "./model/modelCenter.model"
import type { BasicFetchResult } from '@/api/model/base.model'

// 查询业务模型根节点
export const getTreesRoot = (params?:ParamsGetTreesNo) => {
  return service<BasicFetchResult>({
    url: '/portal/inst/models/trees',
    method: 'get',
    params:params
  })
}

// 新增节点的
export const creatTreesNode = (params:ParamsCreatNode) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/trees`,
    method: 'post',
    data:params
  })
}

// 跟新系统节点
export const updateTreesNode = (params:ParamsCreatNode) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/trees/${params.type}/${params.no}`,
    method: 'put',
    data:params
  })
}
//删除系统节点
export const deleteTreesSystem = (params:ParamsDeleteTrees) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/trees/${params.nodeType}/${params.nodeNo}`,
    method: 'delete',
    data:params
  })
}

// 查询设备品牌
export const getBrandsList = (devTypeCode:string) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/devices/${devTypeCode}/brands`,
    method: 'get',
  })
}

// 查询设备型号
export const getModelNosList = (params: { devTypeCode: string; brandCode: string }) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/devices/${params.devTypeCode}/${params.brandCode}/modelNos`,
    method: 'get'
  })
}

// 关联企业
export const getInstEnterprises = (params:{nodeType:string,nodeNo:string}) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/trees/${params.nodeType}/${params.nodeNo}/enterprises`,
    method: 'get',
    params
  })
}
export const setEnterprises = (params:{nodeType:string,nodeNo:string,list:any[]}) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/trees/${params.nodeType}/${params.nodeNo}/enterprises`,
    method: 'post',
    data:params.list
  })
}


// 查询节点属性列表
export const getModelAttributes = (nd: any, params: any) => {
  return service({
    url: `/portal/inst/models/attributes/${nd.type}/${nd.no}`,
    method: 'get',
    params
  })
}
// 更新节点属性
export const putModelAttributes = (nd: any, data: any) => {
  return service({
    url: `/portal/inst/models/attributes/${nd.type}/${nd.no}/${data.code}`,
    method: 'put',
    data
  })
}
// 查询节点量测列表
export const getModelMetrics = (nd: any, params: any) => {
  return service({
    url: `/portal/inst/models/metrics/${nd.type}/${nd.no}`,
    method: 'get',
    params
  })
}
// 新增节点量测
export const postModelMetrics = (nd: any, data: any) => {
  return service({
    url: `/portal/inst/models/metrics/${nd.type}/${nd.metaTypeCode}/${nd.no}`,
    method: 'post',
    data
  })
}
// 删除节点量测
export const delModelMetrics = (nd: any, data: any) => {
  return service({
    url: `/portal/inst/models/metrics/${nd.type}/${nd.no}`,
    method: 'delete',
    data
  })
}
// 查询节点指标列表
export const getModelIndexes = (nd: any, params: any) => {
  return service({
    url: `/portal/inst/models/indexes/${nd.type}/${nd.no}`,
    method: 'get',
    params
  })
}
// 查询节点指标详细信息
export const getModelIndexesId = (nd: any, params: any) => {
  return service({
    url: `/portal/inst/models/indexes/${params.id}`,
    method: 'get',
    params
  })
}
// 更新节点指标详细信息
export const putModelIndexes = (nd: any, data: any) => {
  return service({
    url: `/portal/inst/models/indexes/${data.id}`,
    method: 'put',
    data
  })
}
// 更新状态
export const putModelIndexesStatus = (status: String, params: any) => {
  return service({
    url: `/portal/inst/models/indexes/${params.id}/status`,
    method: 'put',
    params
  })
}
// 批量更新状态
export const putModelIndexesBatch = (status: String, data: any) => {
  return service({
    url: `/portal/inst/models/indexes/${status}/batch`,
    method: 'put',
    data
  })
}

// 查询节点指标详细信息
export const getModelIndexesInfo = (nd: any, params: any) => {
  return service({
    url: `/portal/inst/models/indexes/${params.id}`,
    method: 'get'
  })
}

// 跟新指标详情
export const setModelIndexesInfo = (nd: any, params: any) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/indexes/${params.index.id}`,
    method: 'put',
    data:params
  })
}

// 新增自定义指标（非标准）数据
export const addModelIndexes = (params: any) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/indexes/${params.objType}/${params.objCode}/${params.objNo}`,
    method: 'post',
    data:params.instIndex
  })
}

// 新增指标数据（元数据批量添加使用）
export const addModelIndexesList = (params: any) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/indexes/${params.type}/${params.metaTypeCode}/${params.no}`,
    method: 'put',
    data:params.submitData
  })
}
// 删除非标准指标
export const deleteIndexesSystem = (params:any) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/indexes/${params.indexId}`,
    method: 'delete'
  })
}

// 新增属性数据（元数据批量添加使用）
export const addModelAttributesList = (params: any) => {
  return service<BasicFetchResult>({
    url: `/portal/inst/models/attributes/${params.type}/${params.metaTypeCode}/${params.no}`,
    method: 'post',
    data:params.submitData
  })
}
