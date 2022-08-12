import { useState } from 'react';
import Search from './components/search/Search';
import WeatherData from './components/weather/WeatherData';
import './css/style.css';

function App() {

  const [selectedLocation, setSelectedLocation] = useState('');

  //get coords from child
  const dataFromChild = (lat, lon, name, country, e) => {
    const latitude = lat.toFixed(2);
    const longitude = lon.toFixed(2);
    const locName = name;
    const locCountry = country;

    setSelectedLocation([latitude, longitude, locName, locCountry])
  }

  return (
    <>
      <Search dataFromChild={dataFromChild} />
      <WeatherData coords={selectedLocation} />
    </>
  );
}


export default App;
