import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
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
            .catch((error) => {
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

    //find dupes
    for (let i = 0; i < location.length; i++) {
        for (let x = 1; x < location.length; x++) {
            if ((location[i]?.name === location[x]?.name) &&
                (((Math.round(location[i]?.lat * 10) / 10) === (Math.round(location[x]?.lat * 10) / 10))) &&
                (((Math.round(location[i]?.lon * 10) / 10) === (Math.round(location[x]?.lon * 10) / 10)))) {
                if ((i !== x) && (i < x)) {
                    posAr.push(x);
                }
            }
        }
    }
    //remove duplicates
    newObj = _.omit(location, posAr);

    return (
        <motion.div variants={search} animate="show" initial="hide" className='searchWrapper'>
            <input ref={locRef} autoFocus />
            <button onClick={() => setSelection(locRef?.current.value)}>Search</button>
            <motion.div variants={parent} animate="show" initial="hide" className='locationWrapper'>
                {
                    Object.entries(newObj).map((loc, i) => {
                        return (
                            <motion.div key={(i)} className='location' onClick={() => dataFromChild(loc[1].lat, loc[1].lon, loc[1].name, loc[1].country)} variants={x} initial='hide' animate={{ opacity: 1, transition: { duration: 0.3, delay: i * 0.2 } }} whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}>{loc[1].name} <Flag code={loc[1].country} height='50' /><span>{loc[1].state}</span></motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.div>
    );
}

//animations
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
        border: '1px solid #fff'
    }
};
export const search = {
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
    hide: {
        opacity: 0,
    },
    hover: {
        scale: 1.2,
        border: '1px solid #fff'
    }
};