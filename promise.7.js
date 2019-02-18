
const { step1, step2, step3, step4, step5, err } = require('./db-promise.mock');

// Promise.all([step1(), step2(), step3(), step4(), step5()])
//     .then(results => console.log(results));


// Promise.race([step1(), step2(), step3(), step4(), step5()])
//    .then(results => console.log(results));


// Promise.resolve(10)
// .then(console.log);


// Promise.reject(new Error("Strange error!"))
// .then(console.log)
// .catch(console.log);