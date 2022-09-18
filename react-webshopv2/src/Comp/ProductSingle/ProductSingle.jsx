import { Typography, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { addToCart, removeFromCart } from '../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getWatch } from '../../app/getWatch';
import ProductHighlight from '../ProductHighlight/ProductHighlight'


const ProductSingleContainer = styled.div`
    margin-top:12rem;
    width:100%;
    border:1px solid red;
    display:grid;
    grid-template-columns: 1fr 1fr;
`
const PHContainer = styled.div`
    display:flex;
    justify-content:center;
`
const PSProductInfo = styled.div`
    width100%
`


function ProductSingle() {
    const params = useParams();
    const dispatch = useDispatch();

    const [getBrandWatch, setGetBrandWatch] = useState();


    useEffect(() => {
        getWatch(params.name, params.id).then((data) => { setGetBrandWatch(data) });
    }, [])


    const result = getBrandWatch?.filter((watch) => watch.id == params.id)


    const handleAddToCart = (id, brand, type, price, amount) => {
        dispatch(addToCart({ id, brand, type, price, amount }))
    }

    const handleRemoveFromCart = (id, brand, type, price, amount) => {
        dispatch(removeFromCart({ id, brand, type, price, amount }))
    }

    return (
        <ProductSingleContainer>
            {result && (
                result.map((watch) => {
                    return (
                        <>
                            {console.log(watch)}
                            <PHContainer>
                                <ProductHighlight key={watch.id}>
                                    <img src={watch.img1}></img>
                                    <img src={watch.img2}></img>
                                    <img src={watch.img3}></img>
                                </ProductHighlight>
                            </PHContainer>
                            <PSProductInfo>
                                <Typography>{params.name}</Typography>
                                <Typography>{watch.name}</Typography>
                                <Typography>{watch.ref}</Typography>
                                <Typography>{watch.sku}</Typography>
                                <Typography>{watch.price}</Typography>
                                <Button
                                    onClick={() => handleAddToCart(watch.id, params.name, watch.name, watch.price, 1)}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Add to cart
                                </Button>
                            </PSProductInfo>
                        </>
                    )
                })
            )}
        </ProductSingleContainer>
    )
}

export default ProductSingle