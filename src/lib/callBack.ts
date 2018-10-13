const callBack: CallBack = {}
window.__callbackMessageFromNative = (result: CallBackResult) => {
  (callBack[result.callBackId])(result)
}
export default callBack
