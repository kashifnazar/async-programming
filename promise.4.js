
//Demonstrating finally

const { err } = require("./db.mock");
const util = require('util');

//catch() taking a success and error callbacks
const errPromise = util.promisify(err);
errPromise()
    .then(function () {
        console.log("then() executed");
    })
    .catch(function (e) {
        console.log("catch executed. Error " + e)
    })
    .finally(function() {
        console.log("Finally");
    })

