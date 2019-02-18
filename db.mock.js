
module.exports = {
    step1: function (cb) {
        setTimeout(function () {
            console.log("Step 1")
            if (cb) cb(null, "ok1");
        }, 1000);
    },

    step2: function (cb) {
        setTimeout(function () {
            console.log("Step 2")
            if (cb) cb(null, "ok2");
        }, 2000);
    },

    step3: function (cb) {
        setTimeout(function () {
            console.log("Step 3")
            if (cb) cb(null, "ok3");
        }, 1000);
    },

    step4: function (cb) {
        setTimeout(function () {
            console.log("Step 4")
            if (cb) cb(null, "ok4");
        }, 2000);
    },

    step5: function (cb) {
        setTimeout(function () {
            console.log("Step 5")
            if (cb) cb(null, "ok5");
        }, 500);
    },

    err: function (cb) {
        setTimeout(function () {
            console.log("Error!")
            if (cb) cb("err");
        }, 500);
    }
}