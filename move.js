// Move tgz into `-` directory similar to into npm dir layout
// Example usage: node move.js ./storage/data
// tar -cf npm.tar -C ./storage/data .
const assert = require('assert').strict
const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    const filePath = path.join(dirPath, file)
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
    }
    else {
      if (file === '.verdaccio-db.json' || file === 'package.json') {
        fs.rmSync(path.join(dirPath, file))
      } else {
        arrayOfFiles.push(path.join(dirPath, file))
      }
    }
  })

  return arrayOfFiles
}

const arg = process.argv[2]
const dirPath = path.resolve(process.cwd(), arg)
assert(fs.statSync(dirPath).isDirectory())

let files = getAllFiles(dirPath)

files.forEach((f) => {
  const dirName = path.dirname(f)
  if (!dirName.endsWith('-')) {
    const destDir = path.join(dirName, '-')
    console.log(`Moving ${f} into ${destDir}`)
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir)
    fs.renameSync(f, path.join(destDir, path.basename(f)))
  }
})
console.log('Done')
