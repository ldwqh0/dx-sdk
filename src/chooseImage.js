import callBack from './callBack'

export default ({ count, sourceType } = { count: 9, sourceType: 'album' }) => {

  /**
   * 从相册选择图片
   * @returns {Promise<any>}
   */
  function openCam () {
    return new Promise((resolve, reject) => {
      if (window.dchat) {
        window.dchat.getPictureForCamera('openCam')
      }
      callBack['openCam'] = result => {
        resolve(result)
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
      }
      callBack['selectPictureForAppoint'] = result => {
        resolve(result)
      }
    })
  }

  if (sourceType === 'camera') {
    return openCam()
  } else if (sourceType === 'album') {
    return selectPictureForAppoint(count)
  }
}
