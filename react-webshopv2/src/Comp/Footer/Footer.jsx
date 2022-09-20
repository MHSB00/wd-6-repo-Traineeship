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
    let footerLoad = false;
    const dispatch = useDispatch();
    const stateFooterFilled = useSelector((state) => state.footer);

    //set footer items in state
    useEffect(() => {
        if (!footerLoad) {
            footerLoad = true;
            getFooterItems().then((data) => {
                if(stateFooterFilled.explore == ''){
                   dispatch(setFooterItemsExplore(data.explore));
                    dispatch(setFooterItemsService(data.service));
                    dispatch(setFooterItemsCompany(data.company)); 
                }    
            })
        }
    }, [])
    const stateFooter = useSelector((state) => state.footer);

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