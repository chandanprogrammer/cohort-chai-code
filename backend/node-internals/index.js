const fs = require("fs");

setTimeout(() => console.log("Set Timeout"), 0);

setImmediate(() => console.log("Set Immediate"), 0);

console.log("Hello");

/*
    Output------------>
    Hello
    Set Timeout
    Set Immediate
*/

// const fs2 = require("fs");

// setTimeout(() => console.log("Set Timeout"), 0);

// setImmediate(() => console.log("Set Immediate"), 0);

/*
    Output------------>
    Set Immediate
    Set Timeout
*/


// In above both code why flow of output change? How node js internal works?

// Node JS ---> make in c++ 