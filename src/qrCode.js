import callBack from './callBack'

export function scanQRCode () {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.scanQRCode('scanQRCode')
    }
    callBack.scanQRCode = (result) => {
      resolve(result)
    }
  })
}

export function readQRCode () {

}

