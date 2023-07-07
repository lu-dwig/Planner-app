import React , { useState } from 'react'
// import axios from 'axios'

export default function WeatherWidget() {

    // const url='https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=3ce8ea4d3f861ddd84f72d9c268d89a6 '
    // const [WeatherData, setWeatherData] = useState([{}])

    return (
        <div style={{ minWidth: 370 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                <p>Weather Forecast.</p>
                <div className="weather-container">
                    <div className="top">
                        <div className="Location">
                            <p>Nairobi</p>
                        </div>
                        <div className="temp">
                            <h1>35C</h1> 
                        </div>
                        <div className="description">
                            <p>clouds</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                            <p>19C</p>
                        </div>
                        <div className="humidity">
                            <p>20%</p>
                        </div> 
                        <div className="wind">
                            <p>12mph</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
