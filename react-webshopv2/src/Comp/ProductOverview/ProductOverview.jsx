import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BrandOverview from '../BrandOverview/BrandOverview'


const POContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media(max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
    margin-top:${props => props.props || '0rem'};
`
const POProduct = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

        a{
            text-align:center;
        }
        img{
            width:15rem;
        }
`

const ProductOverview = (props) => {
    const stateMenu = useSelector((state) => state.menu.subMenu);

    const p =  props.props;

    return (
        <POContainer props={p}>
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