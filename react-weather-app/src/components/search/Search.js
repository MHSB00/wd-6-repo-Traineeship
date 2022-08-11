import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';


export default function Search({ dataFromChild }) {
    const [input, setInput] = useState('');
    const [selection, setSelection] = useState('');
    const [location, setLocation] = useState('');


    const limit = 5;

    useEffect(() => {
        if (!selection) return;
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=${limit}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setLocation(data);
                //console.log('hallo');
                //console.log(data);
            })
    }, [selection])


    return (
        <div className='searchWrapper'>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setSelection(input)}>Search</button>
            <div className='locationWrapper'>
            {
                location && location.map(loc => {
                    return (
                        <>
                            <div className='location' onClick={(e) => dataFromChild(loc.lat, loc.lon, loc.name, loc.country, e)} >{loc.name} <Flag code={loc.country} height='50'/></div>
                        </>
                    )
                })
            }
            </div>
        </div>
    );

}