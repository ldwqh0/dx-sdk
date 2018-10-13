export default ({ url = '' }: { url: string }): void => {
  if (window.dchat) {
    window.dchat.showPicture('showPicture', url)
  } else {
    return
  }
}
