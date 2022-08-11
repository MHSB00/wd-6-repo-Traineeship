import { useEffect, useState } from "react";
import dayjs from 'dayjs';

export default function WeatherData({ coords }) {

    const latitude = coords[0];
    const longitude = coords[1];
    const locName = coords[2]
    const locCountry = coords[3]

    const [currentWeather, setCurrentWeather] = useState('');


    useEffect(() => {
        if (!coords) return;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setCurrentWeather(data);
                console.log(currentWeather);
            })
    }, [coords])

    if (!currentWeather) return;

    const currentDate = currentWeather.current.dt;
    const date = dayjs.unix(currentDate)
    const imgURL = 'http://openweathermap.org/img/wn/' + currentWeather.current.weather[0].icon + '@2x.png';
    const temp = Math.round(currentWeather.current.temp * 10) / 10;
    const desc = currentWeather.current.weather[0].description;
    const feelsLike =  Math.round(currentWeather.current.feels_like * 10) / 10




    return (
        <>
            <div className="weatherCardContainer">
                <div className="weatherCardLoc">
                    <div className="city">{locName} {locCountry}</div>
                    <div className="currentDate">{dayjs(date).format('dddd D MMMM')}</div>
                </div>
                <div className="currentWeather">
                    <div className="currentWeatherLeft">
                        <div className="weatherIcon"><img src={imgURL}></img></div>
                        <div className="weatherTemp">{temp} ℃</div>
                        <div className="weatherDesc">{desc}</div>
                    </div>
                    <div className="currentWeatherRight">
                        <div className="currentFeels"><span>Feels Like:</span>{feelsLike}℃ </div>
                        <div className="currentWind"></div>
                        <div className="currentSunrise"></div>
                        <div className="currentLow"></div>
                        <div className="currentRain"></div>
                        <div className="currentSunset"></div>
                    </div>
                </div>
            </div>
        </>
    );
}