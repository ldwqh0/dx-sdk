import callBack from './callBack'
import resolveResult from './resultUtils'

export default function ({ sourceType = 'local' }: { sourceType?: string } = { sourceType: 'local' }): Promise<any> {
  function selectFromNetDist (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (window.dchat) {
        window.dchat.selectFileFromDisk('selectFileFromDisk')
      } else if (window.webkit.messageHandlers.selectFileFromDisk) {
        window.webkit.messageHandlers.selectFileFromDisk.postMessage('selectFileFromDisk', null)
      } else {
        reject('Unsupported browsers')
        return
      }
      callBack['selectFileFromDisk'] = result => {
        resolveResult(result, { resolve, reject })
      }
    })
  }

  function selectFromLocal (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (window.dchat) {
        window.dchat.selectFileFromLocal('selectFileFromLocal')
      } else {
        reject('Unsupported browsers')
        return
      }
      callBack['selectFileFromLocal'] = result => {
        resolveResult(result, { resolve, reject })
      }
    })
  }

  return new Promise<any>((resolve, reject) => {
    if (sourceType === 'netDisk') {
      return selectFromNetDist()
    } else if (sourceType = 'local') {
      return selectFromLocal()
    }
  })
}
