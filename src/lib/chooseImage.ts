import callBack from './callBack'
import resolveResult from './resultUtils'

export default ({ count = 9, sourceType = 'album' }: { count?: number, sourceType?: string } = {
  count: 9,
  sourceType: 'album'
}): Promise<any> => {

  /**
   * 从相册选择图片
   * @returns {Promise<any>}
   */
  function openCam (): Promise<any> {
    return new Promise((resolve, reject) => {
      if (window.dchat) {
        window.dchat.getPictureForCamera('openCam')
      } else if (window.webkit.messageHandlers.getPictureForCamera) {
        window.webkit.messageHandlers.getPictureForCamera.postMessage('openCam')
      } else {
        reject('Unsupported browsers')
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
  function selectPictureForAppoint (count: number) {
    return new Promise((resolve, reject) => {
      if (window.dchat) {
        window.dchat.getPicture('selectPictureForAppoint', count)
      } else if (window.webkit.messageHandlers.getPicture) {
        window.webkit.messageHandlers.getPicture.postMessage('selectPictureForAppoint', count)
      } else {
        reject('Unsupported browsers')
        return
      }
      callBack['selectPictureForAppoint'] = (result: CallBackResult) => {
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
