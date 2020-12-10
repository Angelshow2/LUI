// packages 目录为组件库源码，相关模块不固定，不适宜写死。对于这个问题
// 通过扫描目录获取所有模块，修改 rollup.config.js 

const fs = require('fs-extra')
const path = require('path')
const pkg = require("./package-npm.json")


import vue from 'rollup-plugin-vue2'
import postcss from 'rollup-plugin-postcss'
import postcssScss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import base64 from 'postcss-base64'
import url from 'rollup-plugin-url'

import progress from 'rollup-plugin-progress'





const packages = {}
const dir = path.join(__dirname, './packages')
const files = fs.readdirSync(dir)


// 判断是否是文件夹
function isDir(path) {
  let stat = fs.lstatSync(path)
  let isDir = stat.isDirectory()
  return isDir
}

files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if(isDir(absolutePath)) {
    packages[file] = `packages/${file}/index.js`
  }
})

// const allScript = `${pkg.name}.all`
packages[''] = `packages/index.js`;

function createRollupConfig(file, name) {
  const config = {
    input: file,
    output: {
      file: `lib/${name}/index.js`,
      format: 'es',
      name: name,
      sourcemap: true
    },
    plugins: [
      vue(),
      postcss({
        extract: true,
        parser: postcssScss,
        plugins: [
          base64({
            extensions: ['.png', '.jpeg'],
            root: './packages/',
          }),
          autoprefixer({ add: true }),
        ]
      }),
      url({
              limit: 10 * 1024,
              //include: ['.svg']
          }),
      progress(),
      // filesize()
    ]
  }
  return config
}

const buildPackages = []
for(let name in packages) {
  const file = packages[name]
  buildPackages.push(createRollupConfig(file, name))
}

export default buildPackages







// export default {
//   input: 'packages/index.js',
//   output: {
//     file: 'lib/app.all.js',
//     format: 'cjs'
//   }
// }

// export default [{
//   input: 'packages/a.js',
//   output: {
//     file: 'lib/app.a.js',
//     format: 'cjs'
//   }
// },{
//   input: 'packages/b.js',
//   output: {
//     file: 'lib/app.b.js',
//     format: 'cjs'
//   }
// }];
