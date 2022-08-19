import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { motion } from 'framer-motion';
// import testLoc from './testLoc.json'

export default function Search({ dataFromChild }) {
    const [selection, setSelection] = useState('');
    const [location, setLocation] = useState([]);
    const limit = 5;
    const locRef = useRef();


    ////API
    useEffect(() => {
        if (!selection) return;
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=${limit}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setLocation(data);

            })
            .catch((error)=>{
                console.error('Error:', error);
            })
    }, [selection])


    // //JSON 
    // useEffect(() => {
    //     if (!selection) return;
    //     setLocation(testLoc);
    // }, [selection])


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
        <div className='searchWrapper'>
            <input  ref={locRef} autoFocus />
            <button onClick={() => setSelection(locRef?.current.value)}>Search</button>
            <motion.div variants={parent} animate="show" initial="hide" className='locationWrapper'>
                {
                    // location && location.map(loc => {
                    //     return (
                    //         <>
                    //             <div key={uuidv4()} className='location' onClick={(e) => dataFromChild(loc.lat, loc.lon, loc.name, loc.country, e)} >{loc.name} <Flag code={loc.country} height='50' /></div>
                    //         </>
                    //     )
                    // })
                    Object.entries(newObj).map((loc,i) => {
                        return (
                            <>
                                <motion.div key={uuidv4()} className='location' onClick={(e) => dataFromChild(loc[1].lat, loc[1].lon, loc[1].name, loc[1].country)} variants={x} initial='hide' animate={{ opacity: 1, transition: { duration: 0.3, delay: i * 0.2 } }} whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}>{loc[1].name} <Flag code={loc[1].country} height='50'/></motion.div>
                            </>
                        )
                    })
                }
            </motion.div>
        </div>
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