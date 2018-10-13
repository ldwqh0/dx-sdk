// 定义回调函数集合
declare interface CallBack {
  [key: string]: (result: CallBackResult) => void,
}

declare interface CallBackResult {
  callBackId: string,
  data?: any,
  status: string,
  message?: string
}
