let userName = localStorage.getItem('userName')
document.getElementById('userName').textContent = userName.toUpperCase()

const countriesInfo = document.getElementById('countriesInfo')
const searchBar = document.getElementById('searchBar')



const removeNode=(parentNode)=>{
    while(parentNode.hasChildNodes())
    {
        parentNode.removeChild(parentNode.firstChild);
    }
    return false
}


const displayAll = () =>{
    fetch('https://restcountries.com/v2/all')
.then(response=>response.json())
.then(data=>{
    let countries = data.sort((a,b)=>a.name-b.name)
    for(country of countries)
    {
    let newElement = document.createElement('div')
    newElement.style.textAlign = 'center'
    newElement.style.backgroundColor = '#7bff00'
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
})
.catch(err=>console.log(err))

}
  displayAll()


searchBar.addEventListener('input',function(){

    removeNode(countriesInfo)
    
    let content = searchBar.value
    if(content === '')
    {
        displayAll()
    }
    fetch('https://restcountries.com/v2/all')
    .then(response=>response.json())
    .then(data=>{
    filteredCountries = data.filter(country=> country.name.toLowerCase().includes(content.toLowerCase()))
    let countries = filteredCountries.sort((a,b)=>a.name-b.name)
    removeNode(countriesInfo)
    for(country of countries)
    {
        let newElement = document.createElement('div')
          newElement.style.textAlign = 'center'
         newElement.style.backgroundColor = '#7bff00'
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
})
.catch(err=>console.log(err))
    
})



function callRNode(){
    removeNode(countriesInfo)
    return false
}

