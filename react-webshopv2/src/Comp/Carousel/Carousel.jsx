import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    overflow-x: hidden;
    z-index:-1;
    .video{
        min-width: 100%;
        min-height: 100%;
        object-fit:cover;
    }
`

function Carousel() {

    return (
        <CarouselContainer>
            <video
                preload='true'
                autoPlay
                loop
                muted
                className='video'
                src="assets/watch.mp4"
                type='video/mp4'
            >
            </video>
        </CarouselContainer>
    );
}

export default Carousel;