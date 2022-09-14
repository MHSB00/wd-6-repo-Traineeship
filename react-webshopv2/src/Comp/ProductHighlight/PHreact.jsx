import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const PHContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

const PHWrapper = styled.div`
    display:flex;
    width:100%;
    position:relative;
`

const PHContentWrapper = styled.div`
    overflow:hidden;
    width:100%;
    height:100%;
`

const PHContent = styled.div`
    display:flex;
    transition: all 250ms linear;
    -ms-overflow-style:none;
    scrollbar-width:none;
    &::-webkit-scrollbar, &::-webkit-scrollbar{
        display: none;
    }
    > *{
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1; 
    }
`

const BaseButton = styled.button`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    border: 1px solid #ddd;
`

const PHLeftArrow = styled(BaseButton)`
     left:24px;
`
const PHRightArrow = styled(BaseButton)`
     right:24px;
`

function PHreact(props) {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    return (
        <PHContainer>
            <PHWrapper>
                <PHLeftArrow onClick={() => prev()}>&lt;</PHLeftArrow>
                <PHContentWrapper>
                    <PHContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </PHContent>
                </PHContentWrapper>
                <PHRightArrow onClick={() => next()}>&gt;</PHRightArrow>
            </PHWrapper>
        </PHContainer>
    )
}

export default PHreact