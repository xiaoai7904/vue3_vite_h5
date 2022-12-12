export type RequestResponse<T> = {
  code: number
  data: T
  message: string
}

export type ListType<T> = {
  list: T[]
  total: string | number
}
export type ChainListResult = {
  BestTxFee: number
  BlockLatestTime: string
  BlockNo: number
  ChainType: string
  ChangeUsdDay: number
  ID: number
  PriceBtc: number
  PriceUsd: number
  SentValue: number
  Tps: number
}
