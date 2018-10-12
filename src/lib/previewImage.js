import callBack from './callBack'
import resolveResult from './resultUtils'

export default ({ url = '' }) => {
  if (window.dchat) {
    window.dchat.showPicture('showPicture', url)
  } else {
    return
  }
}
