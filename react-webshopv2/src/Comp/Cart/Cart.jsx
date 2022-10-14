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
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    @media(max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
    
        span{
            padding:2rem;
            font-size:2rem;
        }

`
const ProductLeft = styled.div`
    display:flex;
    flex-direction:column;
    @media(max-width:768px){
        align-items:center;
    }
    
    img{
        width:15rem;
    }
    
`
const ProductCenter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media(max-width:768px){
        align-items:center;
    }
        .incart{
            padding:0;
            font-size:1rem;
        }
`

const ProductRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
    padding:2rem;

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
const SubTotal = styled.div`
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:2rem;
        .subtotal{
            font-size:2rem;
        }
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
                    const x = watch.find((item) => item.id == itemInCart.id);

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

    let subtotal = 0;

    const handleRemoveFromCart = (id, brand, type, price, amount) => {
        dispatch(removeFromCart({ id, brand, type, price, amount }))
    }
    //console.log(getWatchInfo);

    return (
        <CartContainer>
            <ProductContainer>
                {
                    !getWatchInfo && (
                        <ProductCardContainer>
                            <span>Cart is empty</span>
                        </ProductCardContainer>
                    )
                }
                {
                    getWatchInfo?.map((watch, index) => {
                         subtotal += stateItemsInCart[index]?.amount * watch.price;

                            return (
                            <ProductCardContainer key={index}>
                                <ProductLeft>
                                    <img src={watch.img} alt={watch.type}></img>
                                </ProductLeft>
                                <ProductCenter>
                                    <span className='incart'>In Cart:{stateItemsInCart[index]?.amount}</span>
                                    <Button
                                        onClick={() => handleRemoveFromCart(watch.id, watch.name, watch.price, 1)}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, backgroundColor: '#cccccc' }}
                                    >
                                        Remove from cart
                                    </Button>
                                </ProductCenter>
                                <ProductRight>
                                    <Typography className='type'>{watch.name}</Typography>
                                    <Typography className='ref'>{watch.ref}</Typography>
                                    <Typography className='sku'>{watch.sku}</Typography>
                                    <Typography className='price'>&#x20AC;{new Intl.NumberFormat('nl-NL', { maximumSignificantDigits: 3 }).format(watch.price)}</Typography>
                                </ProductRight>
                            </ProductCardContainer>
                        )
                    })   
                }
                {getWatchInfo &&(
                    <>
                        <SubTotal>
                            <Typography>Subtotal:</Typography>
                            <Typography className='subtotal'>&#x20AC;{new Intl.NumberFormat('nl-NL', { maximumSignificantDigits: 3 }).format(subtotal)}</Typography>
                        </SubTotal>
                    </>
                    )
                }

            </ProductContainer>
        </CartContainer>
    )
}

export default Cart