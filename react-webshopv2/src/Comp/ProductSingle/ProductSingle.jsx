import { Typography, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { addToCart, removeFromCart } from '../Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getWatch } from '../../app/getWatch';
import ProductHighlight from '../ProductHighlight/ProductHighlight';

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
    width100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:left;

        .brand{
            font-size:1rem;
            color:#aaa;
        }
        .type{
            font-size:2rem;
            font-weight:bold;
        }
        .ref{
            font-size:0.75rem;
            color:#aaa;
        }
        .sku{
            font-size:0.75rem;
            color:#aaa;
        }
        .price{
            font-size:1.5rem;
        }
        
    
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
    const inCart = stateItemsInCart?.find((watch) => (watch.id == params.id) && (watch.brand == params.name));


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
                                <Typography><span className='brand'>{params.name}</span></Typography>
                                <Typography><span className='type'>{watch.name}</span></Typography>
                                <Typography><span className='ref'>{watch.ref}</span></Typography>
                                <Typography><span className='sku'>{watch.sku}</span></Typography>
                                <Typography><span className='price'>&#x20AC;{new Intl.NumberFormat('nl-NL', { maximumSignificantDigits: 3 }).format(watch.price)}</span></Typography>

                                <Button
                                    onClick={() => handleAddToCart(watch.id, params.name, watch.name, watch.price, 1)}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 1, mb: 1 , backgroundColor:'#cccccc'}}
                                    style={{width:150}}
                                >
                                    Add to cart
                                </Button>
                                {inCart && (
                                    <Button
                                        onClick={() => handleRemoveFromCart(watch.id, params.name, watch.name, watch.price, 1)}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 1, mb: 1, backgroundColor:'#cccccc'}}
                                        style={{width:150}}
                                    >
                                        Remove from cart
                                    </Button>
                                )}

                                {stateItemsInCart != '' && (
                                    <Link to="/Cart">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 1, mb: 1, backgroundColor:'#cccccc'}}
                                            style={{width:150}}
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
        </ProductSingleContainer >
    )
}

export default ProductSingle