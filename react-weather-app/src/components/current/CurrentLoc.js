import { useEffect, useState } from 'react'

export default function CurrentLoc() {

    const [currentLoc, setCurrentLoc] = useState('');

    useEffect(() => {
        //console.log('hallo');
        //if (!currentLoc) return;
        fetch('https://ipinfo.io/json')
            .then(res => res.json())
            .then(data => {
                setCurrentLoc(data);
                console.log(data);
            })
    }, [])

}