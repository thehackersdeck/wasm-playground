import { queues } from '../utils/queues';
import os from 'os';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';

class CompileController {
    /**
     * Compile source to wasm.
     * 
     * @param {Object} req
     * @param {Object} res
     * @return {json}
     */
    static compileFile(req, res) {
        //Run job
        let inputFile = path.join(__dirname, '../server/uploads/') + req.file.filename;
        let outputPath = path.join(__dirname, '../client/compiled/');
        let outputFileName = req.file.filename.split('.')[0];

        let options = ` -o ${outputPath}${outputFileName}.js`;

        let cmd = os.homedir() + process.env.EMSCRIPTEN_BINARY + ` ${inputFile}` + options;

        const child = exec(cmd, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).send({data: null, message: 'Compile Error', error: stderr})
            }

            if (fs.existsSync(outputPath + outputFileName + '.js')) {
                fs.unlinkSync(path.join(__dirname, '../server/uploads/' + req.file.filename));
            }

            //Send response
            res.status(200).send({
                data: {
                    file: {
                        filename: outputFileName,
                        originalname: req.file.originalname.split('.')[0],
                        size: req.file.size
                    }
                },
                message: 'Compiled successfully!'
            });
        });
    }
}

export default CompileController;