import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    align-content: center;
    background-color: #777777;
    color: #eeeeee;
`

const HeaderDropdown = styled.select`
    background-color: #eeeeee;
    color: #777777;
`
const HeaderTitle = styled.h3`
    justify-self: start;
`

const Header = (props) => (
    <HeaderWrapper>
        <HeaderTitle>
            Smart Workbench
            </HeaderTitle>
        <HeaderDropdown>
            <option>Legohaus</option>
        </HeaderDropdown>
    </HeaderWrapper>
)

export default Header;