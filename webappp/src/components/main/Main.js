import React from 'react';
import styled from 'styled-components';

const StepButton = styled.button`
    background-color: #c19a6b;
`
const MainWrapper = styled.main`
`

const Main = (props) => (
    <MainWrapper>
        <StepButton>
            &#12296;
        </StepButton>
    </MainWrapper>
)

export default Main;