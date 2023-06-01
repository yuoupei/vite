export interface ParamsGetTreesNo {
  iterative: boolean
  rootNo: string | number
  rootType: 'SYSTEM' | 'DEVICE'
}

export interface ParamsCreatNode {
  brandCode: string
  childs?: any
  id: number | string
  metaTypeCode: string
  modelNo: string
  name: string
  no: string
  parentNo: string
  parentType: string
  type: 'SYSTEM' | 'DEVICE'
}

export interface ParamsDeleteTrees {
  nodeNo: string
  nodeType: string
}

export interface ParamsAttributes {
  attrCode: string
  attrName: string
  pageNo: Number
  pageSize: Number
}