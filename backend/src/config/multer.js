const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('uploads'))
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)
        const fileName = `${hash.toString("hex")}-${file.originalname}`
        cb(null,fileName)
       })
    }
  })
  

module.exports = {
    storage
}