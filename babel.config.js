module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          'modules': false
        }
      ]
    ],
    plugins: [
      // 处理 export module from 'xxx'语法
      '@babel/plugin-proposal-export-default-from'
    ]
  }
}
