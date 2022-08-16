import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';


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

    // for (let i = 0; i < location.length; i++) {
    //     if ((location[i]?.name === location[i + 1]?.name) && (location[i]?.country === location[i + 1]?.country)) {
    //         location.splice(i + 1, 1)
    //     }
    // }

    let newObj = location;
    const posAr = [];

    for (let i = 0; i < location.length; i++) {
        for (let x = 1; x < location.length; x++) {

            if ((location[i]?.name === location[x]?.name) && (location[i]?.country === location[x]?.country)) {
                if ((i !== x) && (i < x)) {
                    posAr.push(x);
                }
            }
        }
    }
    newObj = _.omit(location, posAr)

    return (
        <div key='searchWrapper' className='searchWrapper'>
            <input key='locRef' ref={locRef} />
            <button key='btn' onClick={() => setSelection(locRef?.current.value)}>Search</button>
            <div key='locWrap' className='locationWrapper'>
                {
                    // location && location.map(loc => {
                    //     return (
                    //         <>
                    //             <div key={uuidv4()} className='location' onClick={(e) => dataFromChild(loc.lat, loc.lon, loc.name, loc.country, e)} >{loc.name} <Flag code={loc.country} height='50' /></div>
                    //         </>
                    //     )
                    // })
                    Object.entries(newObj).map(loc => {
                        return (
                            <>
                                <div key={uuidv4()} className='location' onClick={(e) => dataFromChild(loc[1].lat, loc[1].lon, loc[1].name, loc[1].country, e)} >{loc[1].name} <Flag code={loc[1].country} height='50' /></div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}