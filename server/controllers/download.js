import path from 'path';
import fs from 'fs';

class DownloadController {
    /**
     * Download compiled codes.
     * 
     * @param {Object} req
     * @param {Object} res
     * @return {Blob}
     */
    static downloadFile(req, res) {
        let jsFile = path.join(__dirname, `../client/compiled/${req.body.filename}.js`);
        let wasmFile = path.join(__dirname, `../client/compiled/${req.body.filename}.wasm`);

        if ((! fs.existsSync(jsFile)) && ! fs.existsSync(wasmFile)) {
            //Show error
            return res.redirect('/');
        }

        res.zip([
            { path: jsFile, name: req.body.originalname + '.js' },
            { path: wasmFile, name: req.body.originalname + '.wasm'  }
        ], req.body.originalname + '.zip');
    }
}

export default DownloadController;