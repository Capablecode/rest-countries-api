const countryElement = document.querySelector(".country__container");
const dropDownDiv = document.querySelector(".dropdown");
const dropFilterData = document.querySelector(".drop");
const toggle = document.querySelector(".btn-toggle");
const moon = document.querySelector(".moon");
async function getCountry() {
  const url = await fetch("./data.json");
  const countries = await url.json();
  console.log({ countries });

  countries.forEach((country) => {
    displayCountry(country);
  });
}

getCountry();

function displayCountry(country) {
  console.log("country", country, countryElement);
  const div = document.createElement("div");
  div.classList.add("shadow-box");
  div.innerHTML = `<div class="country__images">
  <img src=${country.flag} />
</div>
<div class="country-data">
  <h4>${country.name}</h4>
  <p><b>Population: </b>${country.population}</p>
  <p><b>Region: </b>${country.region}</p>
  <p><b>Capital: </b>${country.capital}</p>
</div>
</div>`;
  countryElement.appendChild(div);
}

dropDownDiv.addEventListener("click", () => {
  dropFilterData.classList.toggle("showDropDown");
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  moon.classList.toggle("fas");
});
