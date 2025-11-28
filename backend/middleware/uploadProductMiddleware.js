const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinary");

// Cloudinary storage للـ Products
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    allowed_formats: ["jpg", "jpeg", "png", "gif", "webp"],
    transformation: [{ width: 800, height: 800, crop: "limit" }],
  },
});

// Multer configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // الحد الأقصى 2MB
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    // الحد الأدنى 50KB
    if (file.size < 50 * 1024) {
      return cb(new Error("Image is too small! Minimum size is 50KB."), false);
    }
    cb(null, true);
  },
});

// Middleware لرفع صورة واحدة فقط
const uploadProductImage = upload.single("image");

module.exports = { uploadProductImage };
