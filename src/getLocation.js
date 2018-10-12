import callBack from './callBack'
import resolveResult from './resultUtils'

/**
 * 获取定位
 * @param coorType
 * @returns {Promise<any>}
 */
export default ({ coorType } = { coorType: 'wgs84' }) => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.getLocation('getLocationForType', coorType)
    } else {
      reject('unsupported brower')
    }
    callBack['getLocationForType'] = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })
}
