
let api_Key = '65ca97d4ec11525859e1971a6cabe706'

let difKelvin = 273.15
 let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click',() =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }

}) 

function fetchDatosClima (ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_Key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))


}

function mostrarDatosClima(data){
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.weather[0].icon

    console.log(ciudadNombre)
    console.log(temperatura)
    console.log(descripcion)

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La Humedad es de ${humedad} %`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@4x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)


}


