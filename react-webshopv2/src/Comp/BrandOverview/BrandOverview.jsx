import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import ProductSingle from '../ProductSingle/ProductSingle';
import { getBrandWatches } from '../../app/getBrandWatches';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react'


const POContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
@media(max-width:768px){
    grid-template-columns: repeat(1, 1fr);
}
    margin-top:13rem;
`
const POProduct = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    a{
        text-align:center;
    }

    img{
        width:15rem;
        transition: scale 150ms linear;
        &:hover{
            scale: 1.1;
            border:1px solid black;
        }
    }
`

const BrandOverview = () => {

    const brand = useParams();

    const [getAllBrandWatches, setAllBrandWatches] = useState();


    useEffect(() => {
        getBrandWatches(brand.name).then((data) => { setAllBrandWatches(data);});
    }, [brand.name])

    return (
        <POContainer>
            {
                getAllBrandWatches?.map((watch) => {
                    return (
                        <POProduct key={watch.id}>
                            <Link to={`/Brands/${brand.name}/${watch.id}`} element={<ProductSingle />}>
                                <img src={watch.img}></img>
                                <Typography>{watch.name}</Typography>
                            </Link>
                        </POProduct>
                    )
                })
            }
        </POContainer>
    )
}

export default BrandOverview