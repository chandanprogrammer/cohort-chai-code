const display = document.querySelector('#display');
let buttons = document.querySelectorAll(".button");
let clickSound = document.querySelector('#myAudio');

let string = '';

function playAudio() { 
    clickSound.play(); 
} 

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        playAudio();
        if(e.target.innerText === "AC"){
            display.value = '0';
            string = '';
        }
        else if(e.target.innerText === "DEL"){
            display.value = string.substring(0, string.length-1);
            string = display.value;
            if(string === ''){
                display.value = '0';
            }
        }
        else if(e.target.innerText === "="){
            display.value = eval(string);
            string = display.value;
            if(string === "undefined"){
                display.value = "0";
                string = '0';
            }
        }
        else{
            string += e.target.innerText;
            display.value = string;
        }
    })
})