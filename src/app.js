function updateTime() {
  odessaTimeElem.innerHTML = moment().tz("Europe/Kiev").format("LTS");
  lvivTimeElem.innerHTML = moment().tz("Europe/Kiev").format("LTS");
  charkowTimeElem.innerHTML = moment().tz("Europe/Kiev").format("LTS");
}
setInterval(updateTime, 1);

//Odessa city
let odessaCityElem = document.querySelector("#odessa");
let odessaDateElem = odessaCityElem.querySelector(".date");
let odessaTimeElem = odessaCityElem.querySelector(".time");
odessaDateElem.innerHTML = moment().tz("Europe/Kiev").format("MMM Do YYYY");

//lviv city

let lvivCityElem = document.querySelector("#lviv");
let lvivDateElem = lvivCityElem.querySelector(".date");
let lvivTimeElem = lvivCityElem.querySelector(".time");

lvivDateElem.innerHTML = moment().tz("Europe/Kiev").format("MMM Do YYYY");

//charkow city

let charkowCityElem = document.querySelector("#charkow");
let charkowDateElem = charkowCityElem.querySelector(".date");
let charkowTimeElem = charkowCityElem.querySelector(".time");

charkowDateElem.innerHTML = moment().tz("Europe/Kiev").format("MMM Do YYYY");

let today = moment().format("dddd Do MMMM");
let todayElement = document.querySelector("#today");
todayElement.innerHTML = today;
