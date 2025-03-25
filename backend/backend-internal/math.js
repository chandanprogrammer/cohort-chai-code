// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b){
//     return a*b;
// }

// exports.chandan = 'my name chandan'


exports.add = function(a, b) {
  return a + b;
}
exports.multiply = function(a, b){
    return a*b;
}

// named exports --> exports are multiple

// but module.exports are only one in this particular file ---> default exports

module.exports = function(){
    return 'this is default exports module'
}

// module.exports = {add, multiply}

// module.exports = {
//  adding: add, 
//  multiplying: multiply
// }
