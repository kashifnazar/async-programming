// async function f() {
//     return 10;
// }

// (async function () {
//     const v = await f();
//     console.log(v);
// }
// )();



// async function f2() {
//     console.log("Executing f2");
// }


// (async function () {
//     await f2();
// }
// )();



async function f3() {
    throw new Error("Strange error!");
}

(async function () {
    try {
        await f3();
    } catch (error) {
        console.log(error);
    }
}
)();