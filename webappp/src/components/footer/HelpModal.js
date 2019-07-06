import React from 'react';
import styled from 'styled-components';

const HelpModalWrapper = styled.div`
    display: ${({ isHelpModalVisible }) => isHelpModalVisible ? `grid` : `none`};
    background: rgba(0,0,0,0.9);
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    /*grid-template-columns: auto;*/
    justify-items: center;
    align-items: center;
    transition-property: background-color;
    transition-duration: 2s;;
`;

const ExplanationWrapper = styled.div`
    display: grid;
    /*grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;*/
    position: absolute;
    background-color: #eee;
    height: 80%;
    width: 75%
`;

const ExplanationTable = styled.table`
`

const HelpModal = ({ isHelpModalVisible }) =>
    <HelpModalWrapper isHelpModalVisible={isHelpModalVisible}>
        <ExplanationWrapper>
            <p>Die Farben der LEDs haben folgende Bedeutung</p>
            <ExplanationTable>
                <tr>
                    <th>Farbe</th>
                    <th>Bedeutung</th>
                </tr>
                <tr>
                    <td>rot</td>
                    <td>in die falsche Box gegriffen</td>
                </tr>
                <tr>
                    <td>gr&#252;n</td>
                    <td>in die richtige Box gegriffen</td>
                </tr>
                <tr>
                    <td>blaue</td>
                    <td></td>
                </tr>
            </ExplanationTable>
        </ExplanationWrapper>
    </HelpModalWrapper>

export default HelpModal;