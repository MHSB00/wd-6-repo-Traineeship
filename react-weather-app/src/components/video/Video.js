import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { v4 as uuidv4 } from 'uuid';
import _, { set } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';


export default function Video({ coords, vid }) {

    const [background, setBackground] = useState('/assets/ocean.mp4');

    const video = useRef();

    useEffect(() => {
        //rl();
    }, [coords])


    useEffect(() =>{
        

        const videos = document.querySelectorAll('video')
        const active = document.querySelector('[data-active]');
        console.log(active.src.replace(active.baseURI,''));
        if(background !== active.src.replace(active.baseURI,'')){
            for(let i =0; i< videos.length; i++){
                if(background === videos[i].src.replace(videos[i].baseURI,'')){
                    videos[i].dataset.active = true
                    delete active.dataset.active
                }
            }
        }
        
    },[background])


    function bg() {
        const num = Math.floor(Math.random() * 6)
        console.log(num);
            switch (num) {
                case 0:
                  return  "assets/clear.mp4";
                  break;
                case 1:
                    return "assets/clouds.mp4";
                  break;
                case 2:
                    return "assets/snow.mp4";
                  break;
                case 3:
                    return "assets/rain.mp4";
                  break;
                case 4:
                    return "assets/thunderstorm.mp4";
                  break;
                default:
                    return "assets/ocean.mp4";
                  break;
              }
    }

    const Btn = () => {
        return (
            <button onClick={(e) => { setBackground(bg());}} > change BG</button>
        )
    }


    // function rl() {
    //     video.current.src = vid;
    //     video.current.load();
    // }


    return (
        <>
            <Btn />
            <AnimatePresence>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/ocean.mp4"
                    type='video/mp4'
                    data-active
                >
                </motion.video>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/clouds.mp4"
                    type='video/mp4'
                >
                </motion.video>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/clear.mp4"
                    type='video/mp4'
                >
                </motion.video>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/thunderstorm.mp4"
                    type='video/mp4'
                >
                </motion.video>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/snow.mp4"
                    type='video/mp4'
                >
                </motion.video>
                <motion.video
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    id="player"
                    src="assets/rain.mp4"
                    type='video/mp4'
                >
                </motion.video>
            </AnimatePresence>
        </>
    );
}