
const { step1, step2, step3, step4, step5, err } = require('./db-promise.mock');


async function main() {
    await step1();
    await step2();
    await step3();
    await step4();
    await step5();

    console.log("Done")

}


main();