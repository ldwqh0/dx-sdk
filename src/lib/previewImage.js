export default ({ url = '' }) => {
  if (window.dchat) {
    window.dchat.showPicture('showPicture', url)
  } else {
    return
  }
}
