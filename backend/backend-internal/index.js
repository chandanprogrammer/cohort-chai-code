// require('fs') --> node built in
// require('./math') --> current directory me math ki file ko
// require('../math') --> yek directory bahar jao aur parent mei math file ko dhundho 




const fs = require('fs'); // fs  module || import krne ke liye require function use krte hai || require yek id leta hai

const math = require('./math');

console.log(math);
console.log(math.add(2, 6));


fs.writeFile('./test.txt', 'Hello world', ()=>{}); // blocking code

// blocking code vs non-blocking code

// when above code run in browser then show error required function is not defined

// cli command make a function and insert above code

// function execute(exports, require, module, __filename, __dirname){}  -> wrapper function


console.log(__filename); // make node developer run time pe code run krega
console.log(__dirname); 


// node yek wrapper function create krata hai uske baad given code ko run krta hai. 

// node run execute function then run inserted code

function __require(moduleId){
    // ....

    // agar id . se shuru huaa toh user ki directory me code ko dhundo
    // agar bina . ka hai to khud ke internal module me dhundo
    // agar toh mil gya toh weel and good
    // nahi to node_modules me dhundo
    // warna user ko error through kro "MODULE_NOT_FOUND"

    // return something;
}