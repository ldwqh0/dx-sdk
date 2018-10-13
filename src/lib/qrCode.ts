import callBack from './callBack'
import resolveResult from './resultUtils'

export const scanQRCode = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.scanQRCode('scanQRCode')
    } else {
      reject()
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
      reject()
      return
    }
    callBack.readQRCode = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })

}

