import React , { useState } from 'react'
import axios from 'axios'

export default function MyCustomWidget() {
    const [weatherData, setWeatherData] = useState([{}])
    const [location, setLocation] = useState('')
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3ce8ea4d3f861ddd84f72d9c268d89a6 `
    const searchLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response) =>{
                setWeatherData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

    return (
        <div style={{ minWidth: 370 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                <div>
                <p>Weather Forecast.</p>
                </div>
                <div className="weather-search">
                    <input 
                        value={location}
                        onChange={event => setLocation(event.target.value)}
                        placeholder='Enter Location'
                        onKeyPress={searchLocation}
                        type="text"
                    />
                </div>
                <div className="weather-container">
                    <div className="top">
                        <div className="location">
                            <p>{weatherData.name}</p>
                        </div>
                        <div className="temp">
                            {weatherData.main ? <h1>{weatherData.main.temp} °F</h1>  : null}
                        </div>
                        <div className="description">
                            {weatherData.weather ? <p>{weatherData.weather[0].main}</p>  : null}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels" style={{ paddingRight: "5%", marginLeft: "-5%"}}>
                            {weatherData.main ? <p className="bold">{weatherData.main.feels_like}</p>  : null}
                        </div>
                        <div className="humidity" style={{ paddingRight: "5%"}}>
                            {weatherData.main ? <p className="bold">{weatherData.main.humidity}%</p>  : null}
                        </div> 
                        <div className="wind" style={{ paddingRight: "5%"}}>
                            {weatherData.wind ? <p className="bold">{weatherData.wind.speed}MPH</p>  : null}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
