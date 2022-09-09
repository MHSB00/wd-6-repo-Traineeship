import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { getFooterItems } from '../../app/getFooter'
import { setFooterItemsExplore, setFooterItemsService, setFooterItemsCompany } from './footerSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border:0px solid red;
    
`
const Explore = styled.div`

`
const Service = styled.div`

`
const Company = styled.div`

`
const FooterTitle = styled.div`

`
const StyledList = styled.ul`
    list-style:none;
    
`
const StyledLI = styled.li`
    margin-left:-40px
    
`


const Footer = () => {
    const [footerLoad, setFooterLoad] = useState(true);

    const dispatch = useDispatch();

    //set footer items in state
    useEffect(() => {
        if (!footerLoad) return;
        getFooterItems().then((data) => {
            dispatch(setFooterItemsExplore(data.explore));
            dispatch(setFooterItemsService(data.service));
            dispatch(setFooterItemsCompany(data.company));
        })
        setFooterLoad(false)
    }, [footerLoad])
    const stateFooter = useSelector((state) => state.footer)

    //console.log(stateFooter.explore);

    return (
        <FooterContainer>
            <Explore>
                <FooterTitle>EXPLORE</FooterTitle>
                <StyledList>
                    {
                        stateFooter.explore.map((footerItems) => {
                            //console.log(footerItems);
                            return footerItems.map((links, index) => {
                                return <StyledLI key={index}>{links.name}</StyledLI>
                            })
                        })
                    }
                </StyledList>
            </Explore>
            <Service>
                <FooterTitle>SERVICE</FooterTitle>
                <StyledList>
                    {
                        stateFooter.service.map((footerItems) => {
                            //console.log(footerItems);
                            return footerItems.map((links, index) => {
                                return <StyledLI key={index}>{links.name}</StyledLI>
                            })
                        })
                    }
                </StyledList>
            </Service>
            <Company>
                <FooterTitle>COMPANY</FooterTitle>
                <StyledList>
                    {
                        stateFooter.company.map((footerItems) => {
                            //console.log(footerItems);
                            return footerItems.map((links, index) => {
                                return <StyledLI key={index}>{links.name}</StyledLI>
                            })
                        })
                    }
                </StyledList>
            </Company>
        </FooterContainer>

    )
}

export default Footer