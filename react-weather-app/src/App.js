import { useState } from 'react';
import Search from './components/search/Search';
import WeatherData from './components/weather/WeatherData';
import Video from './components/video/Video';
import { AnimatePresence } from 'framer-motion';

import './css/style.css';


function App() {

  const [selectedLocation, setSelectedLocation] = useState('');
  const [vid, setVid] = useState('');

  //get coords from child
  const dataFromChild = (lat, lon, name, country) => {
    const latitude = lat.toFixed(2);
    const longitude = lon.toFixed(2);
    const locName = name;
    const locCountry = country;
    setSelectedLocation([latitude, longitude, locName, locCountry])
  }

  const getcWeather = (current) =>{
    setVid(current.current.weather[0].main);
  }

  return (
    <>
      <AnimatePresence>
        <Video vid={vid} coords={selectedLocation} />
      </AnimatePresence>
      <div className='wrapper'>
        <Search dataFromChild={dataFromChild} />
        <WeatherData coords={selectedLocation} getcWeather={getcWeather}/>
      </div>
    </>
  );
}

export default App;
