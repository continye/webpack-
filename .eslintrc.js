module.exports = {
    // 继承Eslint官方的配置
    extends: ["eslint:recommended"],
    env: {
      node: true, //启用node全局变量
      browser: true,//启用浏览器中全局变量
    },
    parserOptions: {
      ecmaVersion: 6, //es6
      sourceType: "module" //es module
    },
    rules: {
      "no-var": 2, //不能使用var声明变量
    }
  }
  