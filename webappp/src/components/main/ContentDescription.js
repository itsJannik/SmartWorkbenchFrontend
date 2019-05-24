import React from 'react';
import styled from 'styled-components';

const ContentDescriptionWrapper = styled.section`
    /* one grid-column */
    grid-template-columns: auto;
`

const ContentDescriptionHeading = styled.h3`
`
const ContentDescriptionBody = styled.p`
`

const ContentDescription = (props) => (
    <ContentDescriptionWrapper>
        <ContentDescriptionHeading>

        </ContentDescriptionHeading>
        <ContentDescriptionBody>

        </ContentDescriptionBody>
    </ContentDescriptionWrapper>
)

export default ContentDescription;
