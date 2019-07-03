import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

const ContentWrapper = styled.section`
    grid-template-columns: auto;
    box-sizing: border-box;
    border: 2px solid #000;
    border-radius: 2%;
    padding: 2%;
`;

const ContentTitle = styled.h2`
    font-family: verdana;
`;

const ContentImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

const ImageContainer = styled.div`
height: 50vh;
`;

const ContentDescription = styled.ul`
    padding-left: 3%;
`;

const Content = ({ manualInstructions, step }) => {
    return manualInstructions.map((manualInstruction, manualId) =>
        <ContentWrapper id={manualId + 1} key={uniqid()} hidden={!(manualId + 1 === step)}>
            <ContentTitle>
                {manualInstruction.instructionTitle}
            </ContentTitle>
            <ImageContainer>
                <ContentImage src={`/images/${manualInstruction.instructionVisualization}`} />
            </ImageContainer>
            <ContentDescription>
                {
                    manualInstruction.instructionDescription.split("\n").map((item, i) =>
                        <li key={i}>{item}</li>)
                }
            </ContentDescription>
        </ContentWrapper>
    );
}

export default Content;
