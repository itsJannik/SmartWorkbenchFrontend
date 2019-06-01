import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const StepButton = styled.button`
    color: #777777;
    background-color: #eeeeee;
    height: 20%;
    font-size: 10em;
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
            &#8249;
        </StepButton>
        <Content />
        <StepButton>
            &#8250;
        </StepButton>
    </MainWrapper>
)

export default Main;
