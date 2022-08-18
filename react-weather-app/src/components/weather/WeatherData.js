import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import testWeather from './testWeather.json';

export default function WeatherData({ coords, getcWeather }) {
    const locName = coords[2]
    const locCountry = coords[3]
    const [currentWeather, setCurrentWeather] = useState();


    //API
    // useEffect(() => {
    //     if (!coords) return;
    //     const latitude = coords[0];
    //     const longitude = coords[1];
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCurrentWeather(data);
    //             getcWeather(data);
    //         })
    //         .catch((error) => {
    //             alert(`Error has occurred! `, error)
    //         })
    // }, [coords])


    useEffect(() => {
        if (!coords) return;
        setCurrentWeather(testWeather);
        getcWeather(testWeather);
    }, [coords])



    if (!currentWeather) return;

    //current
    const currentDate = currentWeather.current.dt;
    const date = dayjs.unix(currentDate)
    const imgURL = 'http://openweathermap.org/img/wn/' + currentWeather.current.weather[0].icon + '@2x.png';
    const temp = Math.round(currentWeather.current.temp * 10) / 10;
    const wdesc = currentWeather.current.weather[0].description;
    const feelsLike = Math.round(currentWeather.current.feels_like * 10) / 10;
    const wind = currentWeather.current.wind_speed;
    const sunrise = dayjs.unix(currentWeather.current.sunrise);
    const humidity = currentWeather.current.humidity;
    const pressure = currentWeather.current.pressure;
    const sunset = dayjs.unix(currentWeather.current.sunset);

    //forecast
    const dailyArray = currentWeather.daily;


    return (
        <>
            <div className="weatherCardContainer">
                <div className="weatherCardLoc">
                    <div className="city">{locName}, {locCountry}</div>
                    <div className="currentDate">{dayjs(date).format('dddd D MMMM')}</div>
                </div>
                <div className="currentWeather">
                    <motion.div whileHover={{ scale: 1.1, border: '1px solid white', transition: { duration: 0.2 } }} className="currentWeatherLeft">
                        <div className="weatherIcon"><img src={imgURL} alt={wdesc}></img></div>
                        <div className="weatherTemp" >{temp} &#8451;</div>
                        <div className="weatherDesc">{wdesc}</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, border: '1px solid white', transition: { duration: 0.2 } }} className="currentWeatherRight">
                        <div className="currentFeels"><span>Feels Like</span>{feelsLike}℃ </div>
                        <div className="currentWind"><span>Wind</span>{wind} km/h</div>
                        <div className="currentSunrise"><span>Sunrise</span>{dayjs(sunrise).format('HH:mm')}</div>
                        <div className="currentHumidity"><span>Humidity</span>{humidity}%</div>
                        <div className="currentPressure"><span>Pressure</span>{pressure} hPa</div>
                        <div className="currentSunset"><span>Sunset</span>{dayjs(sunset).format('HH:mm')}</div>
                    </motion.div>
                </div>
                <motion.div variants={parent} animate="show" initial="hide" className="weatherForecastWrapper">
                    {
                        dailyArray && dailyArray.map((days, i) => (
                            <motion.div key={uuidv4()} variants={x} initial='hide' animate={{ opacity: 1, transition: { duration: 0.3, delay: i * 0.2 } }} whileHover='hover' className="weatherForecastDay">
                                {dayjs(dayjs.unix(days.dt)).format('D MMM')}
                                <img src={`http://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`} alt={wdesc} />
                                min: {Math.round(days.temp.min * 10) / 10} ℃
                                <br />
                                max: {Math.round(days.temp.max * 10) / 10} ℃
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </>
    );

}

export const parent = {
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hide: {
        opacity: 0,
        transition: {
            when: "beforeChildren",
        },
    }
};

export const children = {
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1,
        }
    },
    hide: {
        opacity: 0,
    },

};
export const x = {
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1,
        }
    },
    hide: {
        opacity: 0,
    },
    hover: {
        scale: 1.2,
        border: '1px solid white'
    }
};