import React from 'react';
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Favorite from '@mui/icons-material/Favorite'
import Badge from '@mui/material/Badge';
import Alert from '@mui/material/Alert';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateScrollProgress, setMenuItems } from './menuSlice';
import { getMenuItems } from '../../app/getMenu';
import { Link } from 'react-router-dom'
import BrandOverview from '../BrandOverview/BrandOverview'

const MenuContainer = styled.div`
    position:fixed;
    background-color:white;
    top:0;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    min-height:12rem;
    transition: top 1s;
    z-index:1;
`
const MenuTop = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:3px solid black;
    text-align:center;
    align-items:center;
    width:90%;
    height:6rem;
`
const ContactInfo = styled.div`  
`
const SubMenu = styled.div`
`
const ShopName = styled.div`
    font-weight:bold;
    font-size:2rem;
`
const MenuBottom = styled.div`
    display:flex;
    align-items:center;
    border:0px solid blue;
    min-height:5.6rem;
    width:90%;
    justify-content:center;
`
const DropDownMenu = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`
const StyledList = styled.ul`
    list-style:none;
`
const StyledLI = styled.li`
    display:inline-block;
    padding:1rem;
`
const ScrollContainer = styled.div`

    width:100%;

`
const ScrollProgress = styled.div`
    height:0.3rem;
    background-color:black;
    width:0%;
    transition: 0.5s;
`

function Menu() {
    let menuLoad = false;
    const stateScrollProgress = useSelector((state) => state.menu.progress);
    const stateItemsInCart = useSelector((state) => state.cart.itemsInCart);


    const loggedIn = useSelector((state) => state.signin.signedin);
    const [subMenuShow, setSubMenuShow] = useState(false);

    const dispatch = useDispatch();
    const stateMenu = useSelector((state) => state.menu.subMenu);

    const getTotalItems = () => {
        let total = 0
        stateItemsInCart.forEach(item => {
            total += item.amount
        })
        return total
    }

    //set menu items in state
    useEffect(() => {
        if (!menuLoad) {
            menuLoad = true;
            getMenuItems().then((data) => {
                const { menuItems, menuImg } = data;
                for (let i = 0; i < menuItems.length; i++) {
                    if (stateMenu == '') {
                        dispatch(setMenuItems({ name: menuItems[i], img: menuImg[i] }))
                    }
                }
            })
        }
    }, [])

    //trigger dropdown
    const handeOnMouseOver = () => {
        setSubMenuShow(true)
    }
    const handeOnMouseLeave = () => {
        setSubMenuShow(false)
    }

    let prevScrollPos = window.scrollY;
    const menuRef = useRef();
    const scrollProgress = useRef();

    //menu scroll
    window.onscroll = () => {
        const currentScrollPos = window.scrollY;
        let scrollHeight = window.document.scrollingElement.scrollHeight - document.documentElement.clientHeight;
        let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        let scrolled = Math.round((winScroll / scrollHeight) * 100);

        //just to practice redux
        dispatch(updateScrollProgress({ progress: scrolled }));
        if (prevScrollPos > currentScrollPos) {
            menuRef.current.style.top = 0;
            scrollProgress.current.style.width = '0%';
        } else {
            menuRef.current.style.top = '-11.7rem';
            scrollProgress.current.style.width = stateScrollProgress.progress + '%';
        }
        prevScrollPos = currentScrollPos;
    }

    return (
        <MenuContainer ref={menuRef}>
            <MenuTop>
                <ContactInfo>
                    <LocationOnOutlinedIcon fontSize='large' /> NL
                    <CallOutlinedIcon fontSize='large' /> +31 123 456 7890
                    <WhatsAppIcon fontSize='large' /> +31 098 765 4321
                </ContactInfo>
                <Link to='/'><ShopName>WATCHSHOP</ShopName></Link>
                <SubMenu>
                    <SearchOutlinedIcon fontSize='large' />
                    <Badge>
                        {loggedIn
                            ? (<Link to='/'><PersonIcon fontSize='large' /></Link>)
                            : (<Link to='/Signin'><PersonOutlineOutlinedIcon fontSize='large' /></Link>)
                        }
                    </Badge>
                    <Badge>
                        {loggedIn
                            ? (<Favorite fontSize='large' />)
                            : (<FavoriteBorderOutlinedIcon fontSize='large' />)
                        }
                    </Badge>
                    <Badge badgeContent={getTotalItems()} overlap='circular'>
                        {loggedIn
                            ? (<ShoppingBag fontSize='large' />)
                            : (<ShoppingBagOutlinedIcon fontSize='large' />)
                        }
                    </Badge>
                </SubMenu>
            </MenuTop>
            <MenuBottom>
                <StyledList onMouseOver={handeOnMouseOver} onMouseLeave={handeOnMouseLeave}>
                    <StyledLI>BRANDS</StyledLI>
                    <StyledLI>NEW ARRIVALS</StyledLI>
                    <StyledLI>ALL WATCHES</StyledLI>
                    <StyledLI>SELL & TRADE</StyledLI>
                    <StyledLI>THE COLLECTOR'S JOURNAL</StyledLI>
                </StyledList>
                {loggedIn && (
                    <Alert severity='success'>Logged in.</Alert>
                )}
            </MenuBottom>
            <ScrollContainer onMouseOver={handeOnMouseOver} onMouseLeave={handeOnMouseLeave}>
                <ScrollProgress ref={scrollProgress} />
            </ScrollContainer>
            {subMenuShow && (
                <DropDownMenu onMouseOver={handeOnMouseOver} onMouseLeave={handeOnMouseLeave}>
                    {
                        stateMenu.map((menuItems, index) => {
                            // return <div key={index}>{menuItems.name}</div>
                            return <Link to={`/Brands/${menuItems.name}`} key={menuItems.name} element={<BrandOverview />}>{menuItems.name}</Link>
                        })
                    }
                </DropDownMenu>
            )}
        </MenuContainer>

    )
}

export default Menu;