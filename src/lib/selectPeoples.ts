import callBack from './callBack'
import resolveResult from './resultUtils'

export default (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.selectPeoplesDefault('selectPeoplesDefault')
    } else {
      reject()
      return
    }
    callBack['selectPeoplesDefault'] = (result) => {
      resolveResult(result, { resolve, reject })
    }
  })
}
