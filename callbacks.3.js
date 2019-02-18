
function f() {
    console.log("Function called");
}


// Another function that takes a function as an argument
function another(cb) {
    cb();
}


// // Passing an assigned function
// another(f);


// // Passing an anonymous
// another(function () {
//     console.log("Inline function called");
// })


console.log("Done!");