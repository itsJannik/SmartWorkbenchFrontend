import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { convertToURLPath } from '../../utils/URL'

const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-evenly;
    align-content: center;
    background-color: #777777;
    color: #eeeeee;
    font-family: Lucida Sans Unicode;
`

const HeaderDropdown = styled.select`
    background-color: #eeeeee;
    color: #777777;
    /* this should allow the dropdown to be scalable */
    -webkit-appearance: menulist-button;
    font-family: inherit;
    margin-right: 50%;
    /* height: 70%; */
    /* margin-top: 15%; */
    margin-bottom:15;
    &:hover {
        cursor: pointer;
    }
`
const DropdownOption = styled.option`
    /* &:hover {
        cursor: pointer;
    } */
`

const HeaderTitle = styled.h1`
    justify-self: start;
    margin-left: 30%;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`

const Header = ({ manualTitles, manualValue, onChange, currentLocation, redirectToHome }) => (
    <HeaderWrapper>
        <HeaderTitle onClick={redirectToHome}>
            Smart Workbench
            </HeaderTitle>
        <HeaderDropdown
            value={manualValue} 
            onChange={onChange}>
                {
                    (currentLocation === "/")?
                    <DropdownOption value="" hidden>Bauplan</DropdownOption>:
                    null
                }
            
            {
                manualTitles.map((manualTitle, manualIndex) => (
                <option
                    value={convertToURLPath(manualTitle)}
                    manual_index={manualIndex}
                    key={uniqid()}>
                    {manualTitle}
                </option>
            ))
            }
        </HeaderDropdown>
    </HeaderWrapper>
)

export default Header;