import React from 'react';
import styled from 'styled-components';
import ContentDescription from './ContentDescription';

const ContentWrapper = styled.section`
    /* one grid-column */
    grid-template-columns: auto;
`
const ContentTitle = styled.h1`
`
const ContentImage = styled.img`
`

const Content = (props) => (
    <ContentWrapper>
        <ContentTitle>

        </ContentTitle>
        <ContentImage>

        </ContentImage>
        <ContentDescription>

        </ContentDescription>
    </ContentWrapper>
)

export default Content