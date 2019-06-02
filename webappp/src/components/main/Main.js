import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const StepButton = styled.a`
    text-decoration: none;
    display: inline-block;
    color: #777777;
    background-color: #eeeeee;
    height: 20%;
    font-size: 10em;
    text-align: center;
    line-height: 0.4;
    /* display: grid;
    align-content: center; */
`
const MainWrapper = styled.main`
    /* this is a grid container */
    display: grid;
    /* one grid-column */
    grid-template-columns: 10% 80% 10%;
    align-items: center;
`

const Main = (props) => (
    <MainWrapper>
        <StepButton>
            {/* <span> */}
                &#8249;
            {/* </span> */}
        </StepButton>
        <Content />
        <StepButton>
            &#8250;
        </StepButton>
    </MainWrapper>
)

export default Main;
