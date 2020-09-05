import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+'-'+file.originalname)
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === "audio/mpeg" ){
        cb(null, true);
    }else{
        cb(new Error("Music uploaded is not of type audio/mpeg"),false);
    }
}
const upload = multer({storage: storage, fileFilter : fileFilter});

module.exports.upload = upload;
