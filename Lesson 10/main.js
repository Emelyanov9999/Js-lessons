/* 6e76178f231169e86525f2276f2ed5da API OpenWeatherMap*/

fetch('https://api.openweathermap.org/data/2.5/weather?q=Mytishchi&appid=6e76178f231169e86525f2276f2ed5da')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data)
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273)+'&#8451;'
    document.querySelector('.weather').innerHTML = data.weather[0]['description']
    document.querySelector('.icon').innerHTML = `<img src = 'http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`
    document.querySelector('.wind-speed').innerHTML = (data.wind.speed) + ' m/s'
    document.querySelector('.humidity').innerHTML = 'humidity: ' + (data.main.humidity) + ' &percnt;'
    document.querySelector('.country').innerHTML = 'Country: '+data.sys.country
    let riseTime = new Date(data.sys.sunrise * 1000)
    document.querySelector('.sun-rise').innerHTML = 'Sunrise: '+ riseTime.toLocaleTimeString()
    let setTime = new Date(data.sys.sunset * 1000)
    document.querySelector('.sun-set').innerHTML = 'Sunset: '+ setTime.toLocaleTimeString()
})
    
