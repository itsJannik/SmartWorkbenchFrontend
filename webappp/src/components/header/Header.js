import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`

`

const HeaderDropdown = styled.select`
    background-color: red;
`
const Header = (props) => (
    <HeaderWrapper>
        <HeaderDropdown>
            <option>Legohaus</option>
        </HeaderDropdown>
    </HeaderWrapper>
)

export default Header;