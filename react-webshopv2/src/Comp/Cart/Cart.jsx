import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getWatch } from '../../app/getWatch';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeFromCart } from '../Cart/cartSlice';

const CartContainer = styled.div`
    margin-top:12rem;
`
const ProductContainer = styled.div`
    padding:1rem;
`
const ProductCardContainer = styled.div`
    margin-bottom:0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display:flex;
    flex-direction:row;
    justify-content:space-around;
        span{
            padding:2rem;
            font-size:2rem;
        }

`
const ProductLeft = styled.div`
    img{
        width:10rem;
    }
`
const ProductCenter = styled.div`

`

const ProductRight = styled.div`
    width:20rem;

`

function Cart() {

    const dispatch = useDispatch();
    const [getWatchInfo, setGetWatchInfo] = useState([]);

    const stateItemsInCart = useSelector((state) => state.cart.itemsInCart);


    useEffect(() => {
        if (stateItemsInCart == '') {
            setGetWatchInfo()
        }
        stateItemsInCart.forEach((itemInCart) => {
            
            if (stateItemsInCart.length >= getWatchInfo) {
                getWatch(itemInCart.brand, itemInCart.id).then((data) => {
                    const { watch, images } = data;
                    const x = watch.find((item) => item.id == itemInCart.id)
                    setGetWatchInfo(getWatchInfo => [...getWatchInfo, x])
                })
            } else if (stateItemsInCart < getWatchInfo) {
                getWatch(itemInCart.brand, itemInCart.id).then((data) => {
                    const { watch, images } = data;
                    const x = watch.find((item) => item.id == itemInCart.id)
                    setGetWatchInfo([x])
                })
            }
        })
    }, [stateItemsInCart])

    const handleRemoveFromCart = (id, brand, type, price, amount) => {
        dispatch(removeFromCart({ id, brand, type, price, amount }))
    }
    //console.log(getWatchInfo);
    return (
        <CartContainer>
            <ProductContainer>
                {
                    !getWatchInfo &&(
                        <ProductCardContainer>
                              <span>Cart is empty</span>        
                        </ProductCardContainer>
                    )
                }
                {
                    getWatchInfo?.map((watch) => {
                        return (
                            <ProductCardContainer>
                                <ProductLeft>
                                    <img src={watch.img} alt={watch.type}></img>
                                </ProductLeft>
                                <ProductCenter>
                                    <Button
                                        onClick={() => handleRemoveFromCart(watch.id, watch.name, watch.price, 1)}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Remove from cart
                                    </Button>
                                </ProductCenter>
                                <ProductRight>
                                    <Typography>{watch.name}</Typography>
                                    <Typography>{watch.ref}</Typography>
                                    <Typography>{watch.sku}</Typography>
                                    <Typography>{watch.price}</Typography>
                                </ProductRight>
                            </ProductCardContainer>
                        )
                    })
                }

            </ProductContainer>
        </CartContainer>
    )
}

export default Cart