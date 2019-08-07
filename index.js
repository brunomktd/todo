let inputTarefa = document.querySelector('#inputTarefa');
let button = document.querySelector('button');



button.addEventListener('click', function(e){
    e.preventDefault();
    console.log(inputTarefa.value);
    alert('Olá ' + inputTarefa.value);
})