document.getElementById('calculateButton').addEventListener('click', function() {
    // input values
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // calculate sum
    let sum = number1 + number2;

    // log the result to the console
    console.log('Sum:', sum);
});