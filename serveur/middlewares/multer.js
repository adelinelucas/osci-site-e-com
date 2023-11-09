// pour ajouter le code de multer
import multer from "multer";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/planets')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'planete' + '-' + uniqueSuffix + '.' + file.mimetype.split("/")[1])
    }
})

const upload = multer({storage :storage })

export default upload;