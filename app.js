// JAVASCRIPT CODES FOR CALCULATION

// varibles
let number01 = 0;
let number02 = 0;
let result = 0;

// btn_example start

// sum = +
function func_sum () {
    number01 = Number(document.getElementById("1st-num").value);
    number02 = Number(document.getElementById("2nd-num").value);
    result = number01+number02;
    document.getElementById("result_sprite").innerHTML = result;
}

// difference = -
function func_difference () {
     number01 = Number(document.getElementById("1st-num").value);
     number02 = Number(document.getElementById("2nd-num").value);
     result = number01-number02;
    document.getElementById("result_sprite").innerHTML = result;
 }

// multiply = x
 function func_multiply () {
    number01 = Number(document.getElementById("1st-num").value);
     number02 = Number(document.getElementById("2nd-num").value);
     result = number01*number02;
     document.getElementById("result_sprite").innerHTML = result;}
// devide = ÷
 function func_devide () {
     number01 = Number(document.getElementById("1st-num").value);
     number02 = Number(document.getElementById("2nd-num").value);
     result = number01/number02;
     document.getElementById("result_sprite").innerHTML = result;
 }

function func_clear () {
    document.getElementById("result_sprite").innerHTML = ('__') ;}


// btn_example end