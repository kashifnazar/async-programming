async function f() {
    return 10;
}

// function f() {
//    return Promise.resolve(10);
//}

async function f2() {
    console.log("Executing f2");
}

// function f2() {
//    console.log("Executing f2")
//    return Promise.resolve();
//}

async function f3() {
    throw new Error("Strange error!");
}

// function f3() {
//     return Promise.reject(new Error("Strange error!"));
// }


