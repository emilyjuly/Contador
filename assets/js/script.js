var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var menos = document.querySelector ('#subtrair');
var mais = document.querySelector ('#adicionar');

mais.addEventListener('click', function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber>0){
        document.getElementById('currentNumber').style.color = "green";
    }
})

menos.addEventListener('click', function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber<0){
        document.getElementById('currentNumber').style.color = "red";
    }
})


