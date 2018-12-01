import path from 'path';

class Validation {
    /**
     * Check if file has a supported extension.
     * 
     * @param {Object} req
     * @param {Object} res
     * @return {Function} cb
     */
    static isSupportedFile(req, file, cb) {
        if (!file.originalname.match(/\.(c)$/)) {
            return cb(new Error('Only C scripts are supported'), false);
        }

        cb(null, true);
    }
}

export default Validation;