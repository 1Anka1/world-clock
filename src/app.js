let selectCityElement = document.querySelector("#select-city");
let cityElem = document.querySelector(".city-container");
let cityTimeElem = document.querySelector(".time");
selectCityElement.addEventListener("change", showDate);

let timer;

function showDate(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone.length > 0) {
    let currentDate = moment().tz(cityTimeZone).format("MMM Do YYYY");

    showTime(cityTimeZone);

    cityElem.innerHTML = `<h2 class="city-name">${cityTimeZone}</h2>
        <div class="date">${currentDate}</div>`;
  } else {
    cityElem.innerHTML = `<h2 class="select-title">Please select a city</h2>`;
  }
}

function showTime(cityTimeZone) {
  clearInterval(timer);
  timer = setInterval(() => {
    cityTimeElem.innerHTML = moment().tz(cityTimeZone).format("LTS");
  }, 1);
}
