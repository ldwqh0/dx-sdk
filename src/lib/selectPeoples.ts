import callBack from './callBack'
import resolveResult from './resultUtils'

export default (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.selectPeoplesDefault('selectPeoplesDefault')
    } else if (window.webkit.messageHandlers.selectPeoplesDefault) {
      window.webkit.messageHandlers.selectPeoplesDefault.postMessage(null)
    } else {
      reject('Unsupported browsers')
      return
    }
    callBack['selectPeoplesDefault'] = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })
}
