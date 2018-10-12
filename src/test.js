import * as dx from './index'

window.getLocation = () => {
  dx.getLocation().then(rsp => {
    console.log(rsp)
  })
}
