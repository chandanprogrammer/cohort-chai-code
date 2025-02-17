let gender = document.getElementsByName('gender');
let age = document.getElementById('age');
let feet = document.getElementById('feet');
let inch = document.getElementById('inch');
let centimeter = document.getElementById('centimeter');
let weight = document.getElementById('weight');
let bmiValue  = 0;

// Switch feet to centimeter

document.getElementById('switch-height').addEventListener(('click'), (e) => {
    if (window.getComputedStyle(document.querySelector('.centimeter')).getPropertyValue('display') == 'none') {
        document.querySelector('.centimeter').style.display = 'grid';
        document.querySelector('.feet-inch').style.display = 'none';
        document.getElementById('switch-height').innerHTML = `Switch to Feet & Inch`;
    }
    else {
        document.querySelector('.centimeter').style.display = 'none';
        document.querySelector('.feet-inch').style.display = 'grid';
        document.getElementById('switch-height').innerHTML = `Switch to Centimeter`;
    }
})

// Action when click on calculate
document.getElementById('submitButton').addEventListener(('click'), (e) => {
    e.preventDefault();
    
    let checkedGender = Array.from(gender).find(
        (radio) => radio.checked
    );
    console.log(checkedGender.value);
    dataValidate(age.value, feet.value, centimeter.value, weight.value);
    
    let height;
    if(window.getComputedStyle(document.querySelector('.centimeter')).getPropertyValue('display') == 'none'){
        height = (feet.value * 0.3048) + (inch.value * 0.0254);
    }
    else{
        height = centimeter.value * 0.01
    }
    if(height != 0){
        bmiValue = weight.value / (height * height);
        bmiValue = Math.trunc(bmiValue * 100) / 100;
    }else{
        bmiValue = 0;
    }

    document.querySelector('.bmiValue').innerHTML = `${bmiValue==0?'- -':bmiValue}`;
    rangeMark(bmiValue);
})



function dataValidate(age, feet, centimeter, weight) {
    if (age >= 2 && age <= 100) {
        document.querySelector('.validate-age').style.display = 'none';
    }
    else {
        document.querySelector('.validate-age').style.display = 'inline';
    }
    if (feet >= 1 && feet <= 10) {
        document.querySelector('.validate-feet-inch').style.display = 'none';
    }
    else {
        document.querySelector('.validate-feet-inch').style.display = 'inline';
    }
    if (centimeter >= 30 && centimeter <= 300) {
        document.querySelector('.validate-centimeter').style.display = 'none';
    }
    else {
        document.querySelector('.validate-centimeter').style.display = 'inline';
    }
    if (weight >= 2 && weight <= 250) {
        document.querySelector('.validate-weight').style.display = 'none';
    }
    else {
        document.querySelector('.validate-weight').style.display = 'inline';
    }
}

function rangeMark(value) {
    if (value == 0) {
        document.querySelector('.rangeMark').style.left = `${0}%`;
    }
    else if (value < 18.5) {
        document.querySelector('.rangeMark').style.left = `${11}%`;
    }
    else if (value > 18.5 && value < 25) {
        document.querySelector('.rangeMark').style.left = `${36}%`;
    }
    else if (value > 25 && value < 30) {
        document.querySelector('.rangeMark').style.left = `${61}%`;
    }
    else if (value > 30) {
        document.querySelector('.rangeMark').style.left = `${88}%`;
    }
}


