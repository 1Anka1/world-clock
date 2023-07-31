window.addEventListener("DOMContentLoaded", () => {
  showDate({ target: { value: "current" } });
});

let selectCityElement = document.querySelector("#select-city");
let cityElem = document.querySelector(".city-container");
let citiesElem = document.querySelector(".cities");
let cityTimeElem = document.querySelector(".time");
selectCityElement.addEventListener("change", showDate);

let timer;

function showDate(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  showTime(cityTimeZone);

  let currentDate = moment().tz(cityTimeZone).format("MMM Do YYYY");
  cityElem.innerHTML = `<h2 class="city-name">${cityTimeZone}</h2>
        <div class="date">${currentDate}</div>`;
}

function showTime(cityTimeZone) {
  clearInterval(timer);
  timer = setInterval(() => {
    cityTimeElem.innerHTML = moment().tz(cityTimeZone).format("LTS");
  }, 1);
}