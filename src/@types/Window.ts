declare interface Window {
  dchat?: {
    showPicture: (id: string, url: string) => void,
    scanQRCode: (id: string) => void,
    readQRCode: (id: string) => void,
    selectPeoplesDefault: (id: string) => void,
    getPictureForCamera: (id: string, count?: number) => void,
    getPicture: (id: string, count?: number) => void
    close: () => void,
    getLocation: (id: string, coorType?: string) => void,
    chooseImage: (id: string) => void,
    selectFileFromDisk: (id: string) => void,
    selectFileFromLocal: (id: string) => void
  },

  webkit?: {
    messageHandlers: any
  }

  __callbackMessageFromNative?: (result: CallBackResult) => void,

}
