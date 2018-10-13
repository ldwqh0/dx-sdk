import callBack from './callBack'
import resolveResult from './resultUtils'

export default ({ count = 9, sourceType = 'album' } = { count: 9, sourceType: 'album' }) => {

  /**
   * 从相册选择图片
   * @returns {Promise<any>}
   */
  function openCam () {
    return new Promise((resolve, reject) => {
      if (window.dchat) {
        window.dchat.getPictureForCamera('openCam')
      } else {
        reject('')
        return
      }
      callBack['openCam'] = result => {
        resolveResult(result, { resolve, reject })
      }
    })
  }

  /**
   * 从相册选择图片
   * @param count
   * @returns {Promise<any>}
   */
  function selectPictureForAppoint (count) {
    return new Promise((resolve, reject) => {
      if (window.dchat) {
        window.dchat.getPicture('selectPictureForAppoint', count)
      } else {
        reject('')
        return
      }
      callBack['selectPictureForAppoint'] = result => {
        resolveResult(result, { resolve, reject })
      }
    })
  }

  if (sourceType === 'camera') {
    return openCam()
  } else if (sourceType === 'album') {
    return selectPictureForAppoint(count)
  }
}
