import callBack from './callBack'

export default () => {
  return new Promise((resolve, reject) => {
    if (window.dchat) {
      window.dchat.selectPeoplesDefault('showPicture')
    }
    callBack['showPicture'] = (result) => {
      resolve(result)
    }
  })
}
