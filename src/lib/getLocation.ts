import callBack from './callBack'
import resolveResult from './resultUtils'

/**
 * 获取定位
 * @param coorType
 * @returns {Promise<any>}
 */
export default ({ coorType } = { coorType: 'wgs84' }): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.getLocation('getLocationForType', coorType)
    } else if (window.webkit.messageHandlers.getLocation) {
      window.webkit.messageHandlers.getLocation.postMessage('getLocationForType', coorType)
    }
    else {
      reject('Unsupported browsers')
      return
    }
    callBack['getLocationForType'] = result => {
      resolveResult(result, { resolve, reject })
    }
  })
}
