const mainHeading = document.getElementById('mainHeading');
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const purpleButton = document.getElementById('purpleButton');
const resetButton = document.getElementById('resetButton');

redButton.addEventListener('click', ()=>{
    mainHeading.style.color = "red";
})
greenButton.addEventListener('click', ()=>{
    mainHeading.style.color = "green";
})
blueButton.addEventListener('click', ()=>{
    mainHeading.style.color = "blue";
})
purpleButton.addEventListener('click', ()=>{
    mainHeading.style.color = "purple";
})
resetButton.addEventListener('click', ()=>{
    mainHeading.style.color = "black";
})