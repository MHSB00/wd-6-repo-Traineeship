import { useEffect, useState } from 'react';
import Search from './components/search/Search';
import WeatherData from './components/weather/WeatherData';
import Video from './components/video/Video';
import { motion } from 'framer-motion';

import './css/style.css';

function App() {

  const [selectedLocation, setSelectedLocation] = useState('');
  const [vid, setVid] = useState('assets/ocean.mp4');

  //get coords from child
  const dataFromChild = (lat, lon, name, country, e) => {
    const latitude = lat.toFixed(2);
    const longitude = lon.toFixed(2);
    const locName = name;
    const locCountry = country;

    setSelectedLocation([latitude, longitude, locName, locCountry])
  }

  //get weather desc from child
  const getVid = (desc) => {

    switch (desc) {
      case 'Clear':
        setVid("/assets/clear.mp4");
        break;
      case 'Clouds':
        setVid("/assets/clouds.mp4");
        break;
      case 'Snow':
        setVid("/assets/clear.mp4");
        break;
      case 'Rain':
        setVid("/assets/clear.mp4");
        break;
      case 'Thunderstorm':
        setVid("/assets/clear.mp4");
        break;
      default:
        setVid("/assets/ocean.mp4");
        break;
    }

  }


  return (
    <>
    <Video vid={vid} coords={selectedLocation}/>
      <div className='wrapper'>
        <Search dataFromChild={dataFromChild} />
        <WeatherData coords={selectedLocation} getVid={getVid} />
      </div>
    </>
  );
}


export default App;
