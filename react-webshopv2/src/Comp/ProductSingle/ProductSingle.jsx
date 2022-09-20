import { Typography, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { addToCart, removeFromCart } from '../Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    border:1px solid red;
`


function ProductSingle() {
    const params = useParams();
    const dispatch = useDispatch();

    const [getBrandWatch, setGetBrandWatch] = useState();
    const [getWatchImages, setWatchImages] = useState();
    const stateItemsInCart = useSelector((state) => state.cart.itemsInCart);

    useEffect(() => {
        getWatch(params.name, params.id).then((data) => {
            const { watch, images } = data;
            setGetBrandWatch(watch);
            setWatchImages(images);
        });
    }, [])


    const result = getBrandWatch?.filter((watch) => watch.id == params.id)
    const inCart = stateItemsInCart?.find((watch) => (watch.id == params.id) && (watch.brand == params.name) );


    let r = [];
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

    //check if item is in cart
    //console.log(stateItemsInCart.filter((currentWatch) => currentWatch.id == watch.id))



    return (
        <ProductSingleContainer>
            {result && (
                result.map((watch) => {
                    return (
                        <React.Fragment key={watch.id}>
                            <PHContainer >
                                <ProductHighlight children={r} />
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
                                {inCart && (
                                    <Button
                                        onClick={() => handleRemoveFromCart(watch.id, params.name, watch.name, watch.price, 1)}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Remove from cart
                                    </Button>
                                )}
                                {stateItemsInCart != '' && (
                                    <Link to="/Cart">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Checkout
                                        </Button>
                                    </Link>
                                )}
                            </PSProductInfo>
                        </React.Fragment>
                    )
                })
            )}
        </ProductSingleContainer>
    )
}

export default ProductSingle