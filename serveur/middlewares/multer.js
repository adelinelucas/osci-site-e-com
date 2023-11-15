// pour ajouter le code de multer
import multer from "multer";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/products')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'ara-product' + '-' + uniqueSuffix + '.' + file.mimetype.split("/")[1])
    }
})

const upload = multer({storage :storage })

export default upload;