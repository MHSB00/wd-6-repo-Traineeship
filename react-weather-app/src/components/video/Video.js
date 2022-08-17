import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';


export default function Video({ coords, vid }) {

    const video = useRef();

    useEffect(() => {

        rl();

    }, [coords])

    function rl() {
        video.current.src = vid;
        //video.current.load();
    }

    return (
        <>
            <AnimatePresence>
                <motion.video
                    animate=
                        {{ 
                            opacity: 1, 
                            transition: 'easeInOut'
                        }}
                    exit=
                        {{ 
                            opacity: 0 
                        }}
                    preload='true'
                    autoPlay
                    loop
                    muted
                    className='video'
                    ref={video}
                    coords={coords}
                    id="player"
                    src={vid}
                    type='video/mp4'
                >
                </motion.video>
            </AnimatePresence>
        </>
    );
}