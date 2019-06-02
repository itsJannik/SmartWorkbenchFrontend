import React from 'react';
import styled from 'styled-components';
import legoManInstruction from '../../data/legoMan/legoInstruction.png';

const ContentWrapper = styled.section`
    /* one grid-column */
    grid-template-columns: auto;
`
const ContentTitle = styled.h2`
`
const ContentImage = styled.img`
    max-width: 100%;
`

const ContentDescription = styled.p`
`

const Content = (props) => (
    <ContentWrapper>
        <ContentTitle>
        Kopf und Körper zusammensetzen
        </ContentTitle>
        <ContentImage src={legoManInstruction} />
        <ContentDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </ContentDescription>
    </ContentWrapper>
)

export default Content;