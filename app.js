function allCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data)=>{
        displayCountry(data)
    })
}
allCountries()

function displayCountry(countries){
    const countriesContainer = document.getElementById("countries")
    countries.forEach(country => {
            const countryDiv = document.createElement("div");
            countryDiv.className = "country"
            const countryInfo = `
            <h3>${country.name.common}</h3>
            <p>${country.population}</p>
            <button class="details_btn" onclick="showDetails('${country.name.common}')">Details</button>
            `
            countryDiv.innerHTML = countryInfo;
            countriesContainer.appendChild(countryDiv)
    });
    
}

const showDetails=name=>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> renderCountryInfo(data[0]))
}

const renderCountryInfo = country =>{
    console.log(country)
    const countryDetail = document.getElementById("countryDetail");
    const detailInfo = `
    <h3>${country.continents[0]}</h3>
    <p> ${country.capital[0]} </p>
    <p> ${country.languages} </p>
    <img src="${country.flags.png}">
    `
    countryDetail.innerHTML = detailInfo;
}

