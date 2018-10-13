dx-js-SDK构建工程

一个简单的鼎信sdk，
sdk依赖于promise,如果在不支持Promise的环境中使用该库，可能需要引入相应的pollyfill

运行方法
```
npm i #安装相关依赖包
npm run build #构建dx-sdk.js
```
npm run dev 可以打开一个简单的测试页面

接口 
* 获取定位
```javascript
dx.getLocation({
  coorType: 'wgs84' //坐标系，wgs84/bd09/gcj02
})
```
* 关闭窗口
```javascript
dx.closeWindow()
```

* 选择多张图片
```javascript

dx.chooseImage({
  count:1,
  sourceType:'album' // album 相册,camera 相机
})
```

* 扫描二维码
```javascript
dx.scanQRCode()
```

* 预览图片
```javascript
dx.previewImage({
  url:'aa' // 图片地址
})
```

## 引入方法
### npm 引入(推荐)
```bash
npm i -S dx-sdk
```

全量引入
```javascript
import * as dx from 'dx-sdk' // 全量引入,es方式
const dx = require('dx-sdk') // commonjs模式
 dx.getLocation().then(res => {
   // more code       
 })
```

按需引入--推荐
这种引入模式会减小打包文件的体系(虽然本身提交就不大)
```javascript
 import getLocation from 'dx-sdk/dist/lib/getLocation' // es方式引入
 const getLocation = require('dx-sdk/dist/lib/getLocation') // commonjs模式引入
 
 getLocation().then(res => {
 
 })

```
### script引入(不推荐)

首先需要构建项目。运行npm run build
会在目录下生成dist/dx-sdk.js
即可在项目中引入该js
```html
<html>
<script src="dist/dx-sdk.js"></script>
<script>
    dx.getLocation().then(rsp=>{
      // more code
    })
</script>
</html>

```
