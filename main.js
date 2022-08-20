//Get all necessary elements from the DOM
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');

//Default city when the page loads
let cityInput = "London";

//Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //Change from default city to the clicked one
        cityInput = e.target.innerHTML;
        /*Function that fetches and displays all the data from the Weatrher API*/
        fetchWeatherData();
        //Fade out the app (simple animation)
        app.style.opacity = "0";
    });
})

//Add submit event to the form
form.addEventListener('submit', (e) => {
    /*If the input field (search bar) is empty, throw and alert*/
    if(search.ariaValueMax.length == 0) {
        alert('Please type in a city name');
    } else {
        /*Change from default city to the one written in the input field*/
        cityInput = search.value;
        /*Function that fetches and displays all the data from the Weather API*/
        fetchWeatherData();
        //Remove all text from the Input field
        search.value = "";
        //Fade out the app (simple animation)
        app.style.opacity = "0";
    }

    //Prevents the default behaviour of the form
    e.preventDefault();
});

/*Function that returns a day of the week (Monday, Tuesday, Friday...) from a date (12 03 2021)*/
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Data('${day}/${month}/${year}').getDay()];
};