export default ({ url = '' }: { url: string }): void => {
  if (window.dchat) {
    window.dchat.showPicture('showPicture', url)
  } else if (window.webkit.messageHandlers.showPicture) {
    window.webkit.messageHandlers.showPicture.postMessage('showPicture', url)
  } else {
    throw new Error('Unsupported browsers')
    return
  }
}
