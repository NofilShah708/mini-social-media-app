const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'))
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, buffer) => {
      if (err) {
        return cb(err)
      }
      const filename = buffer.toString('hex') + path.extname(file.originalname)
      cb(null, filename)
    })
  }
})

const upload = multer({ storage: storage })

module.exports = upload