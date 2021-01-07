const button = document.getElementById("buttonId");
const finalResult = document.getElementById("result");




button.addEventListener('click',  () => {
    const inputValue = document.getElementById('value').value;
    let result = (inputValue - 32) * 5 / 9 ;
    return finalResult.innerHTML = result ;
    

});