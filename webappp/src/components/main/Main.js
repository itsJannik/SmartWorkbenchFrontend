import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const StepButton = styled.button`
    background-color: #c19a6b;
`
const MainWrapper = styled.main`
    /* this is a grid container */
    display: grid;
    /* one grid-column */
    grid-template-columns: 10% 80% 10%;
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
