import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ContentContainer = styled.div`
    display:flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    margin-top:1rem;
    margin-bottom:1rem;
    background-color:#1d1b1c;
    width:100%;
    
    .left{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;

        .contentText{
            display:flex;
            color:white;
            flex-direction:column;
            margin-left:3rem;
            margin-right:3rem;

            .title{
                text-align: center;
                font-size:2rem;
                margin-bottom:0.5rem;
            }
            .sub{
                font-size:1rem;
            }
        }
    }
    .right{
        width:100%;
        text-align:right;

        img{
            height:100%;
            
        }
    }

    .left2{
        width:100%;
        text-align:left;

        img{
            height:100%;

        }
    }
`

const TextContainer = styled.div`
    display:flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-top:2rem;
    margin-bottom:2rem;
    padding:0.5rem;

        .textLeft{
            display:flex;
            flex-direction:column;
            
            .textTitle{
                font-size:2rem;
                font-weight:bold;
            }

            .textContent{
                font-size:1rem;
            }
        }
        .textCenter{
            display:flex;
            flex-direction:column;
            padding-left:0.5rem;
            padding-rigth:0.5rem;
            border-left:1px solid black;
            border-right:1px solid black;

            .textTitle{
                font-size:2rem;
                font-weight:bold;
            }

            .textContent{
                font-size:1rem;
            }
        }

        .textRight{
            display:flex;
            flex-direction:column;
            padding-left:0.5rem;
            .textTitle{
                font-size:2rem;
                font-weight:bold;
            }

            .textContent{
                font-size:1rem;
            }
        }
`

function Content() {
    return (
        <>
            <ContentContainer>
                <div className='left'>
                    <div className='contentText'>
                        <span className='title'>Lorem Ipsum</span>
                        <span className='sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                </div>
                <div className='right'>
                    <img src="https://watchbox-sfcc.imgix.net/revamp/Worlds+Leading+Watch+House.jpg"></img>
                </div>
            </ContentContainer>
            <TextContainer>
                <div className='textLeft'>
                    <span className='textTitle'>Lorem Ipsum</span>
                    <span class='textContent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt id purus non dignissim. Mauris nunc metus, venenatis egestas feugiat a, cursus non justo. Morbi porta quam vel ornare consectetur. Nulla luctus quam et lectus porttitor, ac mollis erat suscipit. Cras nec mauris a enim lobortis dictum. Pellentesque erat neque, pharetra eget ligula in, dignissim ultricies quam. Duis vitae nisl tincidunt dolor tempor ultricies sed tempus metus. Sed nec libero a augue egestas facilisis vitae sit amet nunc. Nulla ligula ligula, feugiat eget nunc nec, sollicitudin tincidunt turpis.
                    </span>
                </div>
                <div className='textCenter'>
                    <span className='textTitle'>Lorem Ipsum</span>
                    <span class='textContent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt id purus non dignissim. Mauris nunc metus, venenatis egestas feugiat a, cursus non justo. Morbi porta quam vel ornare consectetur. Nulla luctus quam et lectus porttitor, ac mollis erat suscipit. Cras nec mauris a enim lobortis dictum. Pellentesque erat neque, pharetra eget ligula in, dignissim ultricies quam. Duis vitae nisl tincidunt dolor tempor ultricies sed tempus metus. Sed nec libero a augue egestas facilisis vitae sit amet nunc. Nulla ligula ligula, feugiat eget nunc nec, sollicitudin tincidunt turpis.
                    </span>
                </div>
                <div className='textRight'>
                    <span className='textTitle'>Lorem Ipsum</span>
                    <span class='textContent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt id purus non dignissim. Mauris nunc metus, venenatis egestas feugiat a, cursus non justo. Morbi porta quam vel ornare consectetur. Nulla luctus quam et lectus porttitor, ac mollis erat suscipit. Cras nec mauris a enim lobortis dictum. Pellentesque erat neque, pharetra eget ligula in, dignissim ultricies quam. Duis vitae nisl tincidunt dolor tempor ultricies sed tempus metus. Sed nec libero a augue egestas facilisis vitae sit amet nunc. Nulla ligula ligula, feugiat eget nunc nec, sollicitudin tincidunt turpis.
                    </span>
                </div>
            </TextContainer>
            <ContentContainer>
                <div className='left2'>
                    <img src="https://watchbox-sfcc.imgix.net/plp/Featured+Collections/Anything+but+Ordinary/AnythingbutOrdinary.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&w=800&h=480&fit=crop&crop=entropy"></img>
                </div>
                <div className='left'>
                    <div className='contentText'>
                        <span className='title'>Lorem Ipsum</span>
                        <span className='sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>

                </div>
            </ContentContainer>
        </>
    )
}

export default Content