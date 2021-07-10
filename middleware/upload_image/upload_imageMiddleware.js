const multer = require('multer');

const uploadSignleImageMiddleware = () => {

    // cấu hình nơi để lưu hình
    const storage = multer.diskStorage({
        // cấu hình đường dẫn thư mục dể lưu file
        destination: function (req, file, cb) {
            cb(null, "./public/image/avatar")
        },
        //  cấu hình tên file
        filename: function (req, file, cb) {
            cb(null, file.originalname )
        }
    })

    const upload = multer({ storage })
    return upload.single("avatar")
}

module.exports = {
    uploadSignleImageMiddleware
}

/** cấu trúc bên trong cb
    function cb(err, value) {
    if (err) return err;
    return value
    }
 */
