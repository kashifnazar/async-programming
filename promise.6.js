
const { step1, step2, step3, step4, step5, err } = require('./db-promise.mock');

//Demonstrating finally

step1()
    .then(function () { return step2() })
    .then(function () { return step3() })
    .then(function () { return step4() })
    .then(function () { return step5() })
    .then(function () { console.log('Done') })
    .catch(function () { console.log("Error occured") })


// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => step4())
//     .then(() => step5())
//     .then(() => console.log('Done'))
//     .catch(() => console.log("Error occured"))