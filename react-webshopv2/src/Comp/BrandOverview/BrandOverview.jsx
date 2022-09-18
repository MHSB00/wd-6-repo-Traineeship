import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import ProductSingle from '../ProductSingle/ProductSingle';
import { getWatches } from '../../app/getWatches';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react'


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
    a{
        text-align:center;
    }
    img{
        width:50%;
        transition: scale 150ms linear;
        &:hover{
            scale: 1.1;
            border:1px solid black;
        }
    }
`

const ProductOverview = () => {

    const brand = useParams();

    const [getBrandWatches, setGetBrandWatches] = useState();


    useEffect(() => {
        getWatches(brand.name).then((data) => { setGetBrandWatches(data) });
    }, [])

    return (
        <POContainer>
            {
                getBrandWatches?.map((watch) => {
                    return (
                        <POProduct key={watch.id}>
                            <Link to={`/Brands/${brand.name}/${watch.id}`} element={<ProductSingle />}>
                                <img src={watch.img1}></img>
                                <Typography>{watch.name}</Typography>
                            </Link>
                        </POProduct>
                    )
                })
            }
        </POContainer>
    )
}

export default ProductOverview