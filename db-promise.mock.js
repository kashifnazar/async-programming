
const mock = require('./db.mock');
const util = require('util');

module.exports = {
    step1: util.promisify(mock.step1),
    step2: util.promisify(mock.step2),
    step3: util.promisify(mock.step3),
    step4: util.promisify(mock.step4),
    step5: util.promisify(mock.step5),
    err: util.promisify(mock.err),
}