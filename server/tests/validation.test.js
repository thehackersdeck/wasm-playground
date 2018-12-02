import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
import ValidationClass from '../middleware/validation'
//import { resolve, basename } from 'path';

/**
 * for more robust (integrated test), perhaps this can lead to a real
 * file on the filesystem. Perhaps something like this::
 * 
 * const fl = basename(resolve(__filename, './asset', 'test.c))
 * 
 */
const file = {
  originalname: 'test.c'
}

chai.use(chaiHttp)

const validate = (file) => new Promise((resolve, reject) => {
  ValidationClass.isSupportedFile(null, file, (err, res) => {
    if (err) {
      reject(err)
    }
    resolve(res)
  })
})


describe('FILE FORMAT VALIDATION', function () {

  /**
   * This is just a simple test. Doesnt necessarily pass yet.
   */
  it('Should assert that the file extension matches the right file extension', async () => {
    const isSupported = await validate(file)
    expect(isSupported).to.be.a('boolean')
    expect(isSupported).to.eql(true)
  })

})

