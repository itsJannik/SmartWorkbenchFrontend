import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.section`
box-sizing: border-box;
    border: 2px solid #000;
    border-radius: 2%;
    padding: 2%;
    grid-template-columns: auto;
    margin: 5% 15% 5% 15%;
`;

const HomeHeading = styled.h3`
    font-family: verdana;
`;

const HomeDescription = styled.p`
    margin-top: 2.5%;
`;

const Home = (props) => (
    <HomeWrapper>
        <HomeHeading>Willkomen bei SmartWorkbench</HomeHeading>
        <HomeDescription>
            Smart Workbench hilft dabei Montageprozesse zu unterstützen. Eine LED markiert hierbei die Werkzeugbox, aus der das für den nächsten Bearbeitungsschritt benötigte Bauteil zu entnehmen ist.
            Auf dem Bildschirm wird zusätzlich angezeigt, wie dieses Teil verbaut werden muss. Wenn dieser Schritt durchgeführt und durch Drücken des &#8250; bestätigt wurde,
            markiert die LED die Box des nächstens Bauteils und zeigt den nächsten Bearbeitungsschritt an und so weiter.
    </HomeDescription>
        <HomeDescription>
            Wähle oben einen Bauplan aus und dann kann es auch schon losgehen!
        </HomeDescription>
    </HomeWrapper>
);

export default Home;
