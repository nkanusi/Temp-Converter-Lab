const button = document.getElementById("buttonId");
const fahrenheitResult = document.getElementById("Fresult");
const celciusResult = document.getElementById("Cresult");
const kelvinResult = document.getElementById("Kresult");
const rankineResult = document.getElementById("Rresult");


function calculateTemperature(){
   let scale = document.getElementById("scale").value;
   const inputValue = document.getElementById('value').value;
   switch(scale) {
      case "fahrenheit":
        convertFromFahrenheit(inputValue);
        break;
      case "celcius":
        convertFromCelcius(inputValue);
        break;

      case "kelvin":
        convertFromKelvin(inputValue);
        break;
      case "rankine":
        convertFromRankine(inputValue);
        break;
  }
}

function convertFromFahrenheit(inputValue){
  
  let fresult = inputValue,
  cresult = Math.round((inputValue - 32) * 5 / 9 ),
  kresult = Math.round(cresult + 273.15),
  rresult= Math.round(kresult * 1.8);
  return celciusResult.textContent = cresult , kelvinResult.textContent = kresult, fahrenheitResult.textContent = fresult, rankineResult.textContent = rresult;
}

function convertFromCelcius(inputValue){
  
  let cresult = inputValue,
  fresult = cresult * 1.8 + 32,
  kresult = (parseInt(cresult) + 273.15),
  rresult = (parseInt(cresult) + 273.15) * 1.8;

  return celciusResult.textContent = cresult , kelvinResult.textContent = kresult, fahrenheitResult.textContent = fresult, rankineResult.textContent = rresult;
}

function convertFromKelvin(inputValue){
  
  let kresult = inputValue,
  cresult = Math.round(kresult - 273.15),
  fresult = Math.round(kresult * 1.8 - 459.67),
  rresult= kresult * 1.8;
  return celciusResult.textContent = cresult , kelvinResult.textContent = kresult, fahrenheitResult.textContent = fresult, rankineResult.textContent = rresult;
}

function convertFromRankine(inputValue){
  
  let rresult = inputValue,
  cresult = (inputValue - 491.67)/1.8;
  fresult = rresult - 459.67;
  kresult= rresult * 5/9 ; 
  return celciusResult.textContent = cresult , kelvinResult.textContent = kresult, fahrenheitResult.textContent = fresult, rankineResult.textContent = rresult;
}