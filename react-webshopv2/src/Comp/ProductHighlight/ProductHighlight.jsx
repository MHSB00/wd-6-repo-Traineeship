import React from 'react'
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/ProductHighlight/MoserFeaturedCollection.avif'
import image2 from '../../assets/ProductHighlight/AnythingbutOrdinary.avif'
import image3 from '../../assets/ProductHighlight/Calendars_Featured+Collections.avif'
import image4 from '../../assets/ProductHighlight/Travel+Feature+Collection.avif'
import image5 from '../../assets/ProductHighlight/Lange+Featured+Collections.avif'
import image6 from '../../assets/ProductHighlight/Rolex+Featured+Collection.avif'

const ProductHighlightContainer = styled.div`
    margin-top:12rem;
    border:1px solid red;
`
const PHCarousel = styled.div`
    position:relative;
`

const PHButtonPrev = styled.button`
    position:absolute;
    z-index: 2;
    background: none;
    border:none;
    font-size: 4rem;
    top:50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    border-radius: .25rem;
    padding:0 .5rem;
    background-color: rgba(0, 0, 0, .1);
    left:1rem;
    &:hover{
        color:white;
        background-color: rgba(0, 0, 0, .2);
    }
    &:focus{
        outline:1px solid black;
        color:white;
        background-color: rgba(0, 0, 0, .2)
    }
`
const PHButtonNext = styled.button`
    position:absolute;
    z-index: 2;
    background: none;
    border:none;
    font-size: 4rem;
    top:50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    border-radius: .25rem;
    padding:0 .5rem;
    background-color: rgba(0, 0, 0, .1);
    right:1rem;
    &:hover{
        color:white;
        background-color: rgba(0, 0, 0, .2);
    }
    &:focus{
        outline:1px solid black;
        color:white;
        background-color: rgba(0, 0, 0, .2)
    }
`

const PHUl = styled.ul`
    margin:0;
    padding:0;
    list-style-type: none;
`
const PHLi = styled.li`
    position: absolute;
    inset:0;
    opacity: 0;
    transition: 200ms opacity ease-in-out;
    transition-delay:200ms;
    &[data-active]{
        opacity: 1;
        z-index: 1;
        transition-delay: 0ms;
    }
`
const PHImg = styled.img`
    display:block;
    max-height:25rem;
    max-width:25rem;
    object-fit: cover;
    object-position: center;

`

function ProductHighlight() {
    useLayoutEffect(() => {
        const buttons = document.querySelectorAll('[data-carousel-button]');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
                const slides = button
                    .closest('[data-carousel]')
                    .querySelector('[data-slides]');
                const activeSlide = slides.querySelector('[data-active]');
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;
                if (newIndex < 0) newIndex = slides.children.length - 1;
                if (newIndex >= slides.children.length) newIndex = 0;
    
                slides.children[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;
            })
        })
    }, [])
    return (
        <ProductHighlightContainer data-carousel>
            <PHCarousel data-carousel>
                <PHButtonPrev data-carousel-button prev={true}>&#8656;</PHButtonPrev>
                <PHButtonNext data-carousel-button next={true}>&#8658;</PHButtonNext>
                <PHUl data-slides>
                    <PHLi data-active>
                        <PHImg src={image1} alt="Nature Image #1"></PHImg>
                    </PHLi>
                    <PHLi>
                        <PHImg src={image2} alt="Nature Image #1"></PHImg>
                    </PHLi>
                    <PHLi>
                        <PHImg src={image3} alt="Nature Image #1"></PHImg>
                    </PHLi>
                    <PHLi>
                        <PHImg src={image4} alt="Nature Image #1"></PHImg>
                    </PHLi>
                    <PHLi>
                        <PHImg src={image5} alt="Nature Image #1"></PHImg>
                    </PHLi>
                    <PHLi>
                        <PHImg src={image6} alt="Nature Image #1"></PHImg>
                    </PHLi>
                </PHUl>
            </PHCarousel>
        </ProductHighlightContainer>
    )
}

export default ProductHighlight