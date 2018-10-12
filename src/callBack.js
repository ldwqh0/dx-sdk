// 定义回调函数集合
const callBack = {}
window.__callbackMessageFromNative = result => {
  callBack[result.callBackId](result)
}
export default callBack
