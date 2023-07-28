let userName = localStorage.getItem('userName')
document.getElementById('userName').textContent = userName.toUpperCase()

const countriesInfo = document.getElementById('countriesInfo')
const searchBar = document.getElementById('searchBar')
const loadingScreen = document.querySelector('.loadingScreen')
const showErr = document.getElementById('showErr')
const errorMsg = document.getElementById('errorMsg')


errorMsg.style.color = 'red'
errorMsg.style.fontWeight = '600'
errorMsg.style.padding = '10px'
errorMsg.style.fontSize = '18px'


function callRNode(){
    removeNode(countriesInfo)
    errorMsg.textContent = ''
    searchBar.value = ''
    return false
}



const removeNode=(parentNode)=>{
    while(parentNode.hasChildNodes())
    {
        parentNode.removeChild(parentNode.firstChild);
    }
    return false
}


const displayAll = () =>{
    errorMsg.textContent = ''
    loadingScreen.style.display = 'flex';
    fetch('https://restcountries.com/v2/all')
.then(response=>response.json())
.then(data=>{
    let countries = data.sort((a,b)=>a.name-b.name)
    for(country of countries)
    {
    let newElement = document.createElement('div')
    newElement.style.textAlign = 'center'
    newElement.style.backgroundColor = ' rgb(95, 244, 95)'
    newElement.style.borderRadius = '15px'
    newElement.innerHTML = `
    <img src = "${country.flag}" alt="${country.name} flag" height="80px" width="100px" style="margin-top:5px">
    <h3 style="color:#3f04fff7">${country.name} </h3>
    <p>Population : ${country.population} </p>
    <p>Area : ${country.area} sq.km</p>
    <p>Capital : ${country.capital} </p>
    `
    countriesInfo.appendChild(newElement)
    }
    loadingScreen.style.display = 'none';
    errorMsg.textContent = ''
})
.catch(err=>console.log(err))

}
  displayAll()


searchBar.addEventListener('input',function(){
    loadingScreen.style.display = 'flex';
    removeNode(countriesInfo)
    errorMsg.textContent = ''
    
    let content = searchBar.value
    if(content === '')
    {
        displayAll()
    }
    fetch('https://restcountries.com/v2/all')
    .then(response=>response.json())
    .then(data=>{
    filteredCountries = data.filter(country=> country.name.toLowerCase().includes(content.toLowerCase()))
    if(filteredCountries.length === 0)
    {
        errorMsg.textContent = 'No countries with such name Exists.'
    }
    let countries = filteredCountries.sort((a,b)=>a.name-b.name)
    removeNode(countriesInfo)
    for(country of countries)
    {
        let newElement = document.createElement('div')
        newElement.style.textAlign = 'center'
         newElement.style.backgroundColor = ' rgb(95, 244, 95)'
        newElement.style.borderRadius = '15px'
        newElement.innerHTML = `
        <img src = "${country.flag}" alt="${country.name} flag" height="80px" width="100px" style="margin-top:5px">
        <h3 style="color:#3f04fff7">${country.name} </h3>
        <p>Population : ${country.population} </p>
        <p>Area : ${country.area} sq.km</p>
        <p>Capital : ${country.capital} </p>
        `
        countriesInfo.appendChild(newElement)
    }
    loadingScreen.style.display = 'none';
    
})
.catch(err=>console.log(err))
    
})





document.addEventListener('DOMContentLoaded',function() {
    loadingScreen.style.display = 'none';
})