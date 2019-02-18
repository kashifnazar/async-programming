
const { step1, step2, step3, step4, step5, err } = require('./db.mock');


step1(function (e1, r1) {
    step2(function (e2, r2) {
        step3(function (e3, r3) {
            step4(function (e4, r4) {
                step5(function (e5, r5) {
                    console.log("Done!");
                })
            })
        })
    })
});