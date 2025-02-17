const teas = ["cold tea", "oolong tea", "Herbal Tea", "hot tea", ""];

// const index = teas.indexOf("oolong tea");
// if (index > -1) {
//   teas.splice(index, 1);
// }

// const caffinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

// console.log(teas.sort());

// teas.forEach((tea) => {
//   console.log(tea);
// });

// let caffinatedMyTeas = 0;
// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] !== "Herbal Tea") {
//     caffinatedMyTeas++;
//   }
// }

// const upperTeas = [];
// for (let i = 0; i < teas.length; i++) {
//   upperTeas.push(teas[i].toUpperCase());
// }

let longTea = teas[0];
for (let i = 1; i < teas.length; i++) {
  if (longTea.length < teas[i].length) {
    longTea = teas[i];
  }
}
console.log(longTea);
