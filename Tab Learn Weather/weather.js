// const { Alert } = require("bootstrap");

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");

const searchForm = document.querySelector("[data-searchForm]");
const loadingSpeed = document.querySelector(".loading-container")

const userInfoContainer =document.querySelector(".user-info-container")
const grantAccessBtn = document.querySelector("[data-grantAccess]")
const searchInput = document.querySelector("[data-searchInput]");

//currently we stating in wich tab
let currentTab = userTab;
const APIkey = "53f327c87ab2082ce6cd29ff713690fc";
currentTab.classList.add("current-tab");

getfromSessioSstorage();
//Switching

function switchtab(clickedTab){
  if(clickedTab!=currentTab){
    currentTab.classList.remove("current-tab");   //current-tab is keyword
    currentTab=clickedTab;
    currentTab.classList.add("current-tab");

    if(!searchForm.classList.contains("active")){   // Searchform active nahi hai it means hame wahin jana hai - to userTab par hai ya grant access par hai use hatana parega
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");

    }
    else{    // we are on the search tab - need to go in currentTab

      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active"); // beacuse hame sirf currentl input wala hi dikhana hai , weather baad me dikhana  hia

      getfromSessioSstorage(); // by default our current location data comes from sesstion storage bcz now we came in currrentTab
    }

  }

}

userTab.addEventListener("click",()=>{
  switchtab(userTab);
})
searchTab.addEventListener("click",()=>{
  switchtab(searchTab);
})



// check if cooordinate are already present in session storage
function getfromSessioSstorage(){
  const localCoordinate = sessionStorage.getItem("user-coordinates");
  if(!localCoordinate){  // if coordinate nahi hia
    grantAccessContainer.classList.add("active")
  }else{
    const coordinate =JSON.parse(localCoordinate)
    fetchUSerWeatherInfo(coordinate);  // take lang &lat and give weather data if in session storage data is not present
  }


}

async function fetchUSerWeatherInfo(coordinate){
  const {lat, lon}  =coordinate;

  // Make grantAccess- container invisible
  grantAccessContainer.classList.remove("active")
  // make loader visible
  loadingSpeed.classList.add("active");

  // API call
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`);
    const data = await response.json();
    loadingSpeed.classList.remove("active");

    // nOw data is came so active userinfo data app
    
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data) // data se value nikal kar UI par show karega

  }
  catch(err){
    loadingSpeed.classList.remove("active");

  }
}



function renderWeatherInfo(weatherInfo){
  //firstly fetch data data 

  const cityName = document.querySelector("[data-cityName]")
  const countryIcon = document.querySelector("[data-countryIcon]")
  const desc = document.querySelector("[data-weatherDesc]")
  const weatherIcon = document.querySelector("[data-weatherIcon]")
  const temp = document.querySelector("[data-temp]")
  const windSpeed = document.querySelector("[data-windspeed]")
  const humidity = document.querySelector("[data-humidity]")
  const cloudness = document.querySelect("[data-cloudiness]")

  // fetch value from weather 
  console.log(weatherInfo);

  cityName.innerText = weatherInfo?.name;
  countryIcon.src =`https://flagcdn.com/144x100/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0]?.description;
  weatherIcon.src=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp} °C`;
  windSpeed.innerText= `${weatherInfo?.wind?.speed} m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity} %`;
  cloudness.innerText = `${weatherInfo?.clouds?.all} %`;


}


function getLocation(){


  navigator.geolocation.getCurrentPosition(showPosition,failedTogetLoc);
  // if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(showPosition)
  // }else{
  //   // Alert("NOo geolocation supported");
  // }

}

function showPosition(position){
  const userCoordinates= {
    lat:position.coords.latitude,
    lon:position.coords.longitude,
      

  }
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  //displaying in UI temp through u=lang and lat
  fetchUSerWeatherInfo(userCoordinates);

 

}
function failedTogetLoc(){
  alert("Failed to fetch LOcation")
};

grantAccessBtn.addEventListener("click", getLocation);// after clicking take my location




searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  let cityName = searchInput.value;

  if(cityName==="") return;
  else {
    fetchSearchWeatherInfo(cityName);
  }
})



async function fetchSearchWeatherInfo(city){
  loadingSpeed.classList.add("active");
  userInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");

  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
    
    //https://api.openweathermap.org/data/2.5/weather?q=muzaffarpur&appid=53f327c87ab2082ce6cd29ff713690fc&units=metric
    const data = await response.json();
    loadingSpeed.classList.remove("active");
    userInfoContainer.classList.add("active");
    //for shwing data of weather in UI
    renderWeatherInfo(data);


  }
  catch(e){

  }


}









