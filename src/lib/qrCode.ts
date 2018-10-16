import callBack from './callBack'
import resolveResult from './resultUtils'

export const scanQRCode = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.scanQRCode('scanQRCode')
    } else if (window.webkit.messageHandlers.scanQRCode) {
      window.webkit.messageHandlers.readQRCode.postMessage('scanQRCode', null)
    } else {
      reject('Unsupported browsers')
      return
    }
    callBack.scanQRCode = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })
}

export const readQRCode = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.readQRCode('readQRCode')
    } else {
      reject('Unsupported browsers')
      return
    }
    callBack.readQRCode = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })

}

