//global variables
let display = document.querySelector('.display');
let preOperator = '';
let postOperator = '';
let calculatedVal = '';
let operator = '';

//math function
function math(firstnumber,secondnumber,operator){
    // operator options: divide, times, minus, plus
    firstnumber = parseInt(firstnumber);
    secondnumber = parseInt(secondnumber);
    if (operator === 'divide') {
        calculatedVal = firstnumber / secondnumber;
    } else if (operator === 'times') {
        calculatedVal = firstnumber * secondnumber;
    }  else if (operator === 'minus') {
        calculatedVal = firstnumber - secondnumber;
    } else {
        calculatedVal = firstnumber + secondnumber;
    }
}

document.querySelector('.calculator').addEventListener('click',function(event){
    display.innerText = event.target.innerText;
    if (event.target.innerText === "C") {
        display.innerText = 0;
        preOperator = '';
        postOperator = '';
        calculatedVal = '';
        operator = '';

    } else if (event.target.id === 'backspace') {
        if (preOperator.length >= 2){
            num = preOperator.length - 1;
            preOperator = preOperator.substring(0,num);
            display.innerText = preOperator;

        } else if (postOperator.length >= 2){
            num = postOperator.length - 1;
            postOperator.substring(1,num);
            display.innerText = postOperator;

        } else {
            preOperator = '';
            postOperator = '';
            display.innerText = 0;
        }
    
    } else if (event.target.className === 'number operator' && event.target.id !== 'equal') {
        operator = event.target.id;
        
    } else if (event.target.id === 'equal') {
        answer = math(preOperator,postOperator,operator);
        preOperator = calculatedVal;
        display.innerText = preOperator;
        postOperator = '';
        operator = '';
    
    } else if (event.target.class !== 'operator' && event.target.class !== 'backspace') {
        if (preOperator === ''){
            preOperator = event.target.innerText;
            display.innerText = preOperator;

        } else if (preOperator !== '' && operator === ''){
            preOperator = preOperator + event.target.innerText;
            display.innerText = preOperator;

        } else if (operator !== '' && postOperator === '') {
            postOperator = event.target.innerText;
            display.innerText = postOperator;

        } else if (operator!== '' && postOperator !== ''){
            postOperator = postOperator + event.target.innerText;
            display.innerText = postOperator;

        }
    } 
});

