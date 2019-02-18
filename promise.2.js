
const { step1, step2, err } = require("./db.mock");
const util = require('util');


const promise1 = new Promise(function (resolve, reject) {
    step1(function (err, result) {
        if (err) {
            reject(new Error(err));
        } else {
            resolve(result);
        }
    })
});


const promise2 = util.promisify(step2);

// Then taking a function as an argument
promise1
    .then(function (v) {
        console.log(v);
    })


// Then taking a Promise as an argument
// promise1
//     .then(promise2())
//     .then(function (v) {
//         console.log(v);
//     })



// then taking a success and an error callbacks
// const errPromise = util.promisify(err);
// errPromise()
//     .then(function () { },
//         function (error) {
//             console.log("Error " + error)
//             return error;
//         })
//     .then(function (m) {
//         console.log(m);
//     })