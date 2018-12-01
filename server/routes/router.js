import path from 'path';
import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import Validation from '../middleware/validation';
import CompileController from '../controllers/compile';
import DownloadController from '../controllers/download';

const router = express.Router();

// Set up multer storage for file download
const storage = multer.diskStorage({
    destination: 'server/uploads',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
});

const upload = multer({ storage: storage, fileFilter: Validation.isSupportedFile });

// VueJS Route
router.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../../client/public/index.html'));
    });

router.route('/compile')
    .post(
        upload.single('script'),
        CompileController.compileFile
    );

router.route('/download')
    .post(
        DownloadController.downloadFile
    )

export default router;