window.__callbackMessageFromNative = result => {
  callBack[result.callBackId](result)
}
export default {}
