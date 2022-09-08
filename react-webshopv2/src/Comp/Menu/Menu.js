import React from 'react';
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateScrollProgress, setMenuItems } from './menuSlice';
import { collection, getDocs, doc } from "firebase/firestore";
import { getMenuItems } from '../../app/getMenu'
import { onLog } from 'firebase/app';
import { getNativeSelectUtilityClasses } from '@mui/material';

const MenuContainer = styled.div`
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    height:12rem;
    transition: top 1s;

`
const MenuTop = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:3px solid black;
    height:100%;
    text-align:center;
    align-items:center;
    width:90%;
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
    height:100%;
    width:90%;
    justify-content:center;

`
const DropDownMenu = styled.div`
    display:block;
    width:100%;
    height:500px;
    border:1px solid red;
    
`
const StyledList = styled.ul`
    list-style:none;
`
const StyledLI = styled.li`
    display:inline-block;
    padding:1rem;
 
`

const ScrollContainer = styled.div`
    height:0.3rem;
    width:100%;
`
const ScrollProgress = styled.div`
    height:0.3rem;
    background-color:black;
    width:0%;
    transition: 0.5s;
`


function Menu() {

    const stateScrollProgress = useSelector((state) => state.menu.progress);
    const [menuLoad, setMenuLoad] = useState(true)

    const dispatch = useDispatch();
    //set menu items in state
    useEffect(() => {
        if (!menuLoad) return;
        getMenuItems().then((data) => {
            data.forEach((item) => {
                dispatch(setMenuItems({ id: item.id, name: item.name }));
            })
            setMenuLoad(false)
        })
    }, [menuLoad])





    let prevScrollPos = window.scrollY;
    const menuRef = useRef();
    const scrollProgress = useRef();

    //get menu items
    // const getMenuItems = async () => {
    //     const ref = await getDocs(collection(db, "subMenu/Brands/Brand"));
    //     const doc = ref.docs.map(doc => doc.data())

    //     console.log(doc);
    // }



    const stateMenu = useSelector((state) => state.menu.subMenu);


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
                <ShopName>WATCHSHOP</ShopName>
                <SubMenu>
                    <SearchOutlinedIcon fontSize='large' />
                    <PersonOutlineOutlinedIcon fontSize='large' />
                    <FavoriteBorderOutlinedIcon fontSize='large' />
                    <Badge>
                        <ShoppingBagOutlinedIcon fontSize='large' />
                    </Badge>
                </SubMenu>
            </MenuTop>
            <MenuBottom>
                <StyledList>
                    <StyledLI>BRANDS</StyledLI>
                    <StyledLI>NEW ARRIVALS</StyledLI>
                    <StyledLI>ALL WATCHES</StyledLI>
                    <StyledLI>SELL & TRADE</StyledLI>
                    <StyledLI>THE COLLECTOR'S JOURNAL</StyledLI>
                </StyledList>
            </MenuBottom>
            <ScrollContainer>
                <ScrollProgress ref={scrollProgress} />
            </ScrollContainer>
            <DropDownMenu>
                {
                    stateMenu.map((menuItems, index) => {
                        return <div key={index}>{menuItems.name}</div>
                    })
                }
            </DropDownMenu>
        </MenuContainer>

    )
}

export default Menu;