const url = document.querySelector(".search-bar");
const dateDisplay = document.getElementById("text2");
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const monthDay = now.getDate();
const weekDay = now.getDay();
const time = now.getTime();


// to jest do przycisku od wyszukiwarek
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick=function(){
  menuToggle.classList.toggle('active')
}
// ------------------------------------------------------------------------ WYSZUKIWARKA | search popup menu

function googleEngine(){
    url.action = "https://www.google.com/search";
}

function ddgEngine(){
    url.action = "https://duckduckgo.com/";
}

function yahooEngine(){
    url.action = "https://search.yahoo.com/search";
}

// ------------------------------------------------------------------------ PRZYCISKI NA NAVBARZE | navbar buttons

function portfolio(){
    window.location.assign("../portfolio/portfolio.html");
}
function edit(){
    window.location.assign("../edit/edit.html");
}
function tools(){
    window.location.assign("../tools/tools.html");
}
function settings(){
    window.location.assign("../settings/settings.html");
}
function todo(){
    window.location.assign("../To-DoApp/todoApp.html");
}






// ------------------------------------------------------------------------ AKTUALNA DATA I POGODA I GODZINA | actual date, weather and time




// data | date
let dayName;
let monthName;

switch (weekDay) {
    case 0:
        dayName = "Niedziela";
        break;
    case 1:
        dayName = "Poniedziałek";
        break;
    case 2:
        dayName = "Wtorek";
        break;
    case 3:
        dayName = "Środa";
        break;
    case 4:
        dayName = "Czwartek";
        break;
    case 5:
        dayName = "Piątek";
        break;
    case 6:
        dayName = "Sobota";
        break;
    default:
        dayName = "Dzień";
        break;
  }


switch(month){
    case 0:
        monthName = "Stycznia";
        break;
    case 1:
        monthName = "Lutego";
        break;
    case 2:
        monthName = "Marca";
        break;
    case 3:
        monthName = "Kwietnia";
        break;
    case 4:
        monthName = "Maja";
        break;
    case 5:
        monthName = "Czerwca";
        break;
    case 6:
        monthName = "Lipca";
        break;
    case 7:
        monthName = "Śierpnia";
        break;
    case 8:
        monthName = "Września";
        break;
    case 9:
        monthName = "Października";
        break;
    case 10:
        monthName = "Listopada";
        break;
    case 11:
        monthName = "Grudnia";
        break;
    default:
        dayName = "Miesiąc";
        break;
}
// data | date

// POGODA | weather
getWeatherData();

async function fetchWeatherData(){
    const apiKey = "20bc1b8e012ca6a9c5d008bfde61c15f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gdańsk&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Something went wrong");
    }
    return await response.json();
}
async function getWeatherData(){
    try{
        const weatherData = await fetchWeatherData();
        DisplayCurrentWeather(weatherData);
    }
    catch(error){
        console.error(error);
    }
}


function DisplayCurrentWeather(data){
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    
    dateDisplay.textContent = `Dziś jest ${dayName}, ${monthDay} ${monthName} ${year} | ${(temp - 273.15).toFixed(1)}°C ${getWeatherEmoji(id)}`;
    
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "☔";
        case (weatherId >= 600 && weatherId < 700):
            return "🌨";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId == 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 809):
            return "🌥";
        default:
            return "❓";
        
    }
}
// POGODA | weather

// ZEGAR | clock
function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);


// ZEGAR | clock

// Greeter

function greeterTimeOfDay(){
    const greeter = document.getElementById("text1");
    const hour = now.getHours();
    console.log(hour);

    if(hour >= 5 && hour < 18){
        greeter.textContent = "Dzień Dobry, Michoto";
        console.log("dzien dobry");
    }
    else{
        greeter.textContent = "Dobry Wieczór, Michoto";
        console.log("dobry wieczór");
    }
}

greeterTimeOfDay()

// Greeter

// ------------------------------------------------------------------------ AKTUALNA DATA I POGODA I GODZINA | actual date, weather and time










