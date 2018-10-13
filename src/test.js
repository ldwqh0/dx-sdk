import * as dx from './index'

window.getLocation = () => {
  dx.getLocation().then(rsp => {
    alert(JSON.stringify(rsp))
  })
}

window.closeWindow = () => {
  dx.closeWindow()
}

window.camera = () => {
  dx.chooseImage({ sourceType: 'camera' }).then(rsp => {
    alert(JSON.stringify(rsp))
  })
}

window.selectpic = () => {
  dx.chooseImage().then(rsp => {
    alert(JSON.stringify(rsp))
  })
}
window.selectMorePic = () => {
  dx.chooseImage({ count: 3 }).then(rsp => {
    alert(JSON.stringify(rsp))
  })
}

window.scanQRCode = () => {
  dx.scanQRCode().then(rsp => {
    alert(JSON.stringify(rsp))
  })
}

window.previewImage = () => {
  dx.previewImage({ url: 'http://www.tagxp.com/uploads/allimg/c170603/149642154A0240-c033.jpg' }).then(rsp => {
    console.log(rsp)
  })
}

window.selectPeoples = () => {
  dx.selectPeoples().then(rsp => {
    alert(JSON.stringify(rsp))
  })
}

