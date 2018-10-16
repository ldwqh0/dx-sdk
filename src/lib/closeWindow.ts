export default () => {
  if (window.dchat) {
    window.dchat.close()
  } else if (window.webkit.messageHandlers.close) {
    window.webkit.messageHandlers.close.postMessage(null)
  }

  throw new Error('Unsupported browsers')
}
