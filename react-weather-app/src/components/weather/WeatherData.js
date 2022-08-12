import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

export default function WeatherData({ coords }) {
    const locName = coords[2]
    const locCountry = coords[3]
    const [currentWeather, setCurrentWeather] = useState('');


    useEffect(() => {
        if (!coords) return;
        const latitude = coords[0];
        const longitude = coords[1];
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setCurrentWeather(data);
            })
    }, [coords])

    if (!currentWeather) return;

    //current
    const currentDate = currentWeather.current.dt;
    const date = dayjs.unix(currentDate)
    const imgURL = 'http://openweathermap.org/img/wn/' + currentWeather.current.weather[0].icon + '@2x.png';
    const temp = Math.round(currentWeather.current.temp * 10) / 10;
    const desc = currentWeather.current.weather[0].main;
    const wdesc = currentWeather.current.weather[0].description;
    const feelsLike = Math.round(currentWeather.current.feels_like * 10) / 10;
    const wind = currentWeather.current.wind_speed;
    const sunrise = dayjs.unix(currentWeather.current.sunrise);
    const humidity = currentWeather.current.humidity;
    const pressure = currentWeather.current.pressure;
    const sunset = dayjs.unix(currentWeather.current.sunset);

    //forecast
    const dailyArray = currentWeather.daily;

    switch (desc) {
        case 'Clear':
            document.body.style.backgroundImage = "url(assets/img/clearsky.jpg)";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url(assets/img/clouds.jpg)";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url(assets/img/snow.jpg)";
            break;
        case 'Rain':
            document.body.style.backgroundImage = "url(assets/img/rain.jpg)";
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url(assets/img/thunderstorm.jpg)";
            break;
        default:
            document.body.style.backgroundImage = "url(assets/img/clearsky.jpg)";
            break;
    }
    return (
        <>
            <div className="weatherCardContainer">
                <div className="weatherCardLoc">
                    <div className="city">{locName}, {locCountry}</div>
                    <div className="currentDate">{dayjs(date).format('dddd D MMMM')}</div>
                </div>
                <div className="currentWeather">
                    <div className="currentWeatherLeft">
                        <div className="weatherIcon"><img src={imgURL} alt={wdesc}></img></div>
                        <div className="weatherTemp">{temp} &#8451;</div>
                        <div className="weatherDesc">{wdesc}</div>
                    </div>
                    <div className="currentWeatherRight">
                        <div className="currentFeels"><span>Feels Like</span>{feelsLike}℃ </div>
                        <div className="currentWind"><span>Wind</span>{wind} km/h</div>
                        <div className="currentSunrise"><span>Sunrise</span>{dayjs(sunrise).format('HH:mm')}</div>
                        <div className="currentHumidity"><span>Humidity</span>{humidity}%</div>
                        <div className="currentPressure"><span>Pressure</span>{pressure} hPa</div>
                        <div className="currentSunset"><span>Sunset</span>{dayjs(sunset).format('HH:mm')}</div>
                    </div>
                </div>
                <div className="weatherForecastWrapper">
                    {
                        dailyArray && dailyArray.map(days => (
                            <div key={uuidv4()} className="weatherForecastDay">
                                {dayjs(dayjs.unix(days.dt)).format('D MMM')}
                                <img src={`http://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`} alt={wdesc} />
                                min: {Math.round(days.temp.min * 10) / 10} ℃
                                <br />
                                max: {Math.round(days.temp.max * 10) / 10} ℃
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}