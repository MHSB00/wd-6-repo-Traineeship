import { useState } from 'react';
import Search from './components/search/Search';
import WeatherData from './components/weather/WeatherData';
import Video from './components/video/Video';
import { motion } from 'framer-motion';
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
    setSelectedLocation([latitude, longitude, locName, locCountry]);
  }

  const getcWeather = (data) => {
    setVid(data);
  }

  return (
    <>
      <Video vid={vid} coords={selectedLocation} />
      <motion.div variants={parent} animate="show" initial="hide" className='wrapper'>
        <Search dataFromChild={dataFromChild} />
        <WeatherData coords={selectedLocation} getcWeather={getcWeather} />
      </motion.div>
    </>
  );
}

export default App;

export const parent = {
  show: {
      opacity: 1,
      transition: {
        duration:1.5
      },
  },
  hide: {
      opacity: 0,
  }
};