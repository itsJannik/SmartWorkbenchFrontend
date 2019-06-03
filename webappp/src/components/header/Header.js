import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';

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
    /* this should allow the dropdown to be scalable */
    -webkit-appearance: menulist-button;
`
const HeaderTitle = styled.h1`
    justify-self: start;
`

const Header = ({ manualTitles, onChange }) => (
    <HeaderWrapper>
        <HeaderTitle>
            Smart Workbench
            </HeaderTitle>
        <HeaderDropdown onChange={onChange}>
            {manualTitles.map((manualTitle) => (
                <option value={manualTitle} key={uniqid()}>
                        {manualTitle}
                </option>
            ))}

        </HeaderDropdown>
    </HeaderWrapper>
)

export default withRouter(Header);