dx-js-SDK构建工程

一个简单的鼎信sdk

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
