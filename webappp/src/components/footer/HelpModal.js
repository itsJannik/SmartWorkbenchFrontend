import React from 'react';
import styled from 'styled-components';

const HelpModalWrapper = styled.div`
    display: ${({ isHelpModalVisible }) => isHelpModalVisible ? `grid` : `none`};
    background: rgba(0,0,0,0.9);
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    justify-items: center;
    align-items: center;
    transition-property: background-color;
    transition-duration: 2s;
`;

const ExplanationWrapper = styled.div`
    display: grid;
    position: absolute;
    background-color: #eee;
    height: 80%;
    width: 75%;
    font-family: Lucida Sans Unicode;
    padding: 5%;
`;

const ExplanationText = styled.p`
    text-align: center;
    font-size: larger;
`;

const ExplanationTable = styled.table`
    
`;

const ExplanantionTableCell = styled.td`
    text-align: center;
`;

const Dot = styled.span`
    border-radius: 50%;
    background-color: ${({ dotColor }) => dotColor};
    height: 50px;
    width: 50px;
    display: inline-block;
`;

const HelpModal = ({ isHelpModalVisible, closeHelpModal }) =>
    <HelpModalWrapper id="help_modal" isHelpModalVisible={isHelpModalVisible} onClick={closeHelpModal}>
        <ExplanationWrapper>
            <ExplanationText>
                Die Farben der LEDs haben folgende Bedeutung
                </ExplanationText>
            <ExplanationTable>
                <tr>
                    <th>Farbe</th>
                    <th>Bedeutung</th>
                </tr>
                <tr>
                    <ExplanantionTableCell>
                        <Dot dotColor="#f00"></Dot>
                    </ExplanantionTableCell>
                    <ExplanantionTableCell>
                        in die falsche Box gegriffen
                        </ExplanantionTableCell>
                </tr>
                <tr>
                    <ExplanantionTableCell>
                        <Dot dotColor="#0f0"></Dot>
                    </ExplanantionTableCell>
                    <ExplanantionTableCell>
                        in die richtige Box gegriffen
                        </ExplanantionTableCell>
                </tr>
                <tr>
                    <ExplanantionTableCell>
                        <Dot dotColor="#00f"></Dot>
                    </ExplanantionTableCell>
                    <ExplanantionTableCell>
                        zeigt die Box an, aus der das nächste Bauteil entnommen werden kann
                    </ExplanantionTableCell>
                </tr>
            </ExplanationTable>
        </ExplanationWrapper>
    </HelpModalWrapper>

export default HelpModal;