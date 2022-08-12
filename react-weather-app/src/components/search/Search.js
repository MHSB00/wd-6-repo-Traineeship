import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { v4 as uuidv4 } from 'uuid';


export default function Search({ dataFromChild }) {
    const [selection, setSelection] = useState('');
    const [location, setLocation] = useState('');
    const limit = 5;
    const locRef = useRef();

    useEffect(() => {
        if (!selection) return;
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=${limit}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setLocation(data);
            })
    }, [selection])

    for (let i = 0; i < location.length; i++) {
        if ((location[i]?.name === location[i + 1]?.name) && (location[i]?.country === location[i + 1]?.country)) {
            location.splice(i + 1, 1)
        }
    }


    return (
        <div className='searchWrapper'>
            <input ref={locRef} />
            <button onClick={() => setSelection(locRef?.current.value)}>Search</button>
            <div className='locationWrapper'>
                {
                    location && location.map(loc => {
                        return (
                            <>
                                <div key={uuidv4()} className='location' onClick={(e) => dataFromChild(loc.lat, loc.lon, loc.name, loc.country, e)} >{loc.name} <Flag code={loc.country} height='50' /></div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );

}