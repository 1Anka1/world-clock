window.addEventListener("DOMContentLoaded", () => {
  showDate({ target: { value: "current" } });
});

let selectCityElement = document.querySelector("#select-city");
let cityElem = document.querySelector(".city-container");
let cityTimeElem = document.querySelector(".time");

selectCityElement.addEventListener("change", showDate);

let timer;
let isTimeHidden = false;

function showDate(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  const cityElemContent =
    cityTimeZone.length === 0
      ? `<h2 class="select-title">Please select a city</h2>`
      : `<h2 class="city-name">${cityTimeZone}</h2>
      <div class="date">${moment()
        .tz(cityTimeZone)
        .format("MMM Do YYYY")}</div>`;
  cityElem.innerHTML = cityElemContent;

  if (cityTimeZone.length === 0) {
    if (!isTimeHidden) {
      cityTimeElem.style.display = "none"; // Hide the time element
      isTimeHidden = true;
    }
  } else {
    showTime(cityTimeZone);

    if (isTimeHidden) {
      cityTimeElem.style.display = "block"; // Display the time element
      isTimeHidden = false;
    }
  }
}
function showTime(cityTimeZone) {
  clearInterval(timer);
  timer = setInterval(() => {
    cityTimeElem.innerHTML = moment().tz(cityTimeZone).format("LTS");
  }, 1);
}
