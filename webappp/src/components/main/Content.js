import React from 'react';
import styled from 'styled-components';
import legoManInstruction from '../../data/legoMan/legoInstruction.png';
import uniqid from 'uniqid';

const ContentWrapper = styled.section`
    /* one grid-column */
    grid-template-columns: auto;
`
const ContentTitle = styled.h2`
    font-family: verdana;
`
const ContentImage = styled.img`
    max-width: 100%;
`

const ContentDescription = styled.p`
`
const Content = ({manualInstructions, step}) => (
    manualInstructions.map((manualInstruction, manualId) => (
        <ContentWrapper id={manualId+1} key={uniqid()} hidden={!(manualId+1 === step)}>
            <ContentTitle>
                {manualInstruction.instructionTitle}
            </ContentTitle>
            <ContentImage src={legoManInstruction} />
            {/* <ContentImage src={instructionVisualization} /> */}
            <ContentDescription>
                {manualInstruction.instructionDescription}
            </ContentDescription>
        </ContentWrapper>
    )
)





)

export default Content;