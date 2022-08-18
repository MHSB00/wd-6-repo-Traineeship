import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

export default function Video({ vid }) {

    const video = useRef();

    useLayoutEffect(() => {
        const videos = document.querySelectorAll('video')
        const active = document.querySelector('[data-active]');
        //console.log(active.src.replace(active.baseURI, ''));

        console.log(vid);

        if (!vid) return;
        const vidURL = "assets/" + vid + ".mp4";

        if (vidURL !== active.src.replace(active.baseURI, '')) {
            for (let i = 0; i < videos.length; i++) {
                if (vidURL === videos[i].src.replace(videos[i].baseURI, '')) {
                    videos[i].dataset.active = true;
                    delete active.dataset.active;
                }
            }
        }
    }, [vid])

    return (
        <>
            <video
                key='ocean'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Ocean.mp4"
                type='video/mp4'
                data-active
            >
            </video>
            <video
                key='clouds'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Clouds.mp4"
                type='video/mp4'
            >
            </video>
            <video
                key='clear'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Clear.mp4"
                type='video/mp4'
            >
            </video>
            <video
                key='thunderstorm'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Thunderstorm.mp4"
                type='video/mp4'
            >
            </video>
            <video
                key='snow'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Snow.mp4"
                type='video/mp4'
            >
            </video>
            <video
                key='rain'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Rain.mp4"
                type='video/mp4'
            >
            </video>
            <video
                key='fog'
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                ref={video}
                id="player"
                src="assets/Fog.mp4"
                type='video/mp4'
            >
            </video>

        </>
    );
}