import multer from "multer";

const multerUpload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("file");

const upload = (req, res, next) => {
  multerUpload(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    next();
  });
};

export default upload;
