let nulll = document.getElementById('null');
let nine = document.getElementById('nine');
let eight = document.getElementById('eight');
let seven = document.getElementById('seven');
let six = document.getElementById('six');
let five = document.getElementById('five');
let four = document.getElementById('four');
let three = document.getElementById('three');
let two = document.getElementById('two');
let one = document.getElementById('one');
let point = document.getElementById('point');

let oldExampleInput = document.getElementById('oldExampleInput');
let oldResultInput = document.getElementById('oldResultInput');
let exampleInput = document.getElementById('exampleInput');
let resultInput = document.getElementById('resultInput');

let clear = document.getElementById('clear');

let operation = 0;
let newOperation = 0;

nulll.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + nulll.textContent
})
one.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + one.textContent
})
two.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + two.textContent
})
three.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + three.textContent
})
four.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + four.textContent
})
five.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + five.textContent
})
six.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + six.textContent
})
seven.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + seven.textContent
})
eight.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + eight.textContent
})
nine.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + nine.textContent
})
point.addEventListener('click', function(){
    resultInput.textContent = resultInput.textContent + point.textContent
})
function clearInput(){
    resultInput.textContent = '';
}
clear.addEventListener('click', clearInput);
