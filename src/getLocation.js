import callBack from './callBack'

export default ({ coorType } = { coorType: 'wgs84' }) => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.getLocation('getLocationForType', coorType)
    } else {
      reject('unsupported brower')
    }
    callBack['getLocationForType'] = (result) => {
      resolve(result)
    }
  })
}
