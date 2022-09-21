import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import BrandOverview from '../BrandOverview/BrandOverview'


const POContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-content:center;
    
`
const POProduct = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

        a{
            text-align:center;
        }
        img{
            width:15rem;
        }
`

const ProductOverview = () => {
    const stateMenu = useSelector((state) => state.menu.subMenu);

    return (
        <POContainer>
            {
                stateMenu.map((item) => {
                    return (
                        <POProduct key={item.name}>
                            <Link to={`/Brands/${item.name}`} element={<BrandOverview />}>
                                <img src={item.img}></img>
                                <Typography>{item.name}</Typography>
                            </Link>
                        </POProduct>
                    )
                })
            }
        </POContainer>
    )
}

export default ProductOverview