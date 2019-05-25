import React from 'react';
import styled from 'styled-components';
import legoMan_headAndBody from '../../data/legoMan/headAndBody.png';

const ContentWrapper = styled.section`
    /* one grid-column */
    grid-template-columns: auto;
`
const ContentTitle = styled.h1`
`
const ContentImage = styled.img`
`

const ContentDescription = styled.p`
`

const Content = (props) => (
    <ContentWrapper>
        <ContentTitle>
        Kopf und Körper zusammensetzen
        </ContentTitle>
        <ContentImage src={legoMan_headAndBody} />
        <ContentDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </ContentDescription>
    </ContentWrapper>
)

export default Content;