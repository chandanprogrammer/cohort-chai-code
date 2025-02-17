// console.log(Array.prototype);


const arr = [7, 4, 8, 2, 6, 9];

Array.prototype.myForEach = function (callbackFun) {
  for (var i = 0; i < this.length; i++) {
    callbackFun(this[i], i);
  }
};
arr.myForEach((a, index) => {
    console.log(`index ${index} : ${a}`);
});
