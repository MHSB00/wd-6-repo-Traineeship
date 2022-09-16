import { Typography, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { addToCart } from '../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductSingleContainer = styled.div`
    margin-top:12rem;
    width:100%;
    border:1px solid;
    display:grid;
    grid-template-columns: 1fr 1fr;
`
const PSCarousel = styled.div`
    width:100%;
    img{
        width:50%;
    }
`
const PSProductInfo = styled.div`
    width100%
`

function ProductSingle() {
    const dispatch = useDispatch();

    const handleAddToCart = (id, brand, type, price, amount) => {
        dispatch(addToCart({id, brand, type, price, amount}))
    }
    const handleAddToCart2 = () => {
        dispatch(
            addToCart({
                id: 2,
                brand: 'Patek',
                type: 'Grand Complications Sky Moon Tourbillon',
                price: '22590',
                amount: 1
            }))
    }


    return (
        <>
            <ProductSingleContainer>
                <PSCarousel>
                    <img src="https://watchbox-cdn.imgix.net/posted-product-images/637914049867382141_ROLE347506_4642070_84896_1.jpg?h=1540&w=1540&auto=compress,format" alt="placeholder1" />
                </PSCarousel>
                <PSProductInfo>
                    <Typography>Brand: Rolex</Typography>
                    <Typography>Type-name: Daytona Cosmograph 116523</Typography>
                    <Typography>Type-ref: REF 116523</Typography>
                    <Typography>Type-SKU: SKU#4642070</Typography>
                    <Typography>Price: 22.590</Typography>
                    <Button
                        onClick={() => handleAddToCart(1, 'Rolex', 'Daytona Cosmograph 116523', 22590, 1)}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add to cart
                    </Button>
                </PSProductInfo>
            </ProductSingleContainer>
            <ProductSingleContainer>
                <PSCarousel>
                    <img src="https://watchbox-cdn.imgix.net/posted-product-images/637946845987716452_pate321048_4622742_43_2.jpg" alt="placeholder1" />
                </PSCarousel>
                <PSProductInfo>
                    <Typography>Brand: Patek Philippe</Typography>
                    <Typography>Type-name: Grand Complications Sky Moon Tourbillon</Typography>
                    <Typography>Type-ref: REF 5002P-001</Typography>
                    <Typography>Type-SKU: SKU#4622742</Typography>
                    <Typography>Price: 3.590</Typography>
                    <Button
                        onClick={handleAddToCart2}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add to cart
                    </Button>
                </PSProductInfo>
            </ProductSingleContainer>
        </>
    )
}

export default ProductSingle