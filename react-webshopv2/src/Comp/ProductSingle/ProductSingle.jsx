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
    const [getWatchImages, setWatchImages] = useState();


    useEffect(() => {
        getWatch(params.name, params.id).then((data) => {
            const { watch, images } = data;
            setGetBrandWatch(watch);
            setWatchImages(images);
        });
    }, [])


    const result = getBrandWatch?.filter((watch) => watch.id == params.id)

let r=[];
getWatchImages?.forEach((imgsrc) => {
        const imgAr = Object?.values(imgsrc)
        return (
            imgAr?.forEach((url) => {
               r.push([React.createElement('img', { src: url }, null)]);
              return r;
            })

        )
    })







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
                            {/* {console.log(watch)} */}

                            <PHContainer key={watch.id}>
                                <ProductHighlight children={r}/>
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