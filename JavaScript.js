const button = document.getElementById("buttonId");
const fahrenheitResult = document.getElementById("Fresult");
const celciusResult = document.getElementById("Cresult");
const kelvinResult = document.getElementById("Kresult");
const rankineResult = document.getElementById("Rresult");
let scale = document.getElementById("scale");


button.addEventListener('click',  () => {
    const inputValue = document.getElementById('value').value;
    
    let fresult = inputValue, cresult = (inputValue - 32) * 5 / 9 ,
     kresult = cresult + 273.15, rresult= kresult * 1.8;
     

    // console.log(rresult);
    // console.log(fresult);

    return celciusResult.textContent = cresult , kelvinResult.textContent = kresult, fahrenheitResult.textContent = fresult, rankineResult.textContent = rresult;

});//calculate button




