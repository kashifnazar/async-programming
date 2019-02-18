
const { step1, step2, step3, step4, step5, err } = require('./db.mock');


step1(function (e1, r1) {
    if (e1) {
        console.log("Error 1");
    } else {
        step2(function (e2, r2) {
            if (e2) {
                console.log("Error 2")
            } else {
                step3(function (e3, r3) {
                    if (e3) {
                        console.log("Error 3");
                    } else {
                        err(function (e4, r4) {
                            if (e4) {
                                console.log("Error 4");
                            } else {
                                step5(function (e5, r5) {
                                    if (e5) {
                                        console.log("Error 5");
                                    } else {
                                        console.log("Done");
                                    }
                                })
                            }
                        })
                    }

                })
            }
        })
    }
});