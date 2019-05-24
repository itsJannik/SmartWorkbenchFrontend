import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #c19a6b;
  height: 100vh;
  width: 100vw;
  /* this is a grid container */
  display: grid;
  /* one grid-column */
  grid-template-columns: 100%;
  grid-template-rows: 10% 80% 10%;

  box-sizing: border-box;
    padding: 0;
    margin: 0;
`
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    /* Loading Simulation */
    this.setState({
      isLoading: true,
      data: {},
    })
    /* fetch data here */
    this.setState({
      data: {
        manuals: [{
          manualTitle: "Legohaus bauen",
          manualInstructions: [
            {
              instructionTitle: "Dach bauen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            },
            {
              instructionTitle: "Mauer bauen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            },
            {
              instructionTitle: "Dach und Mauer zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            }
          ]
        },
        {
          manualTitle: "Legomännchen bauen",
          manualInstructions: [
            {
              instructionTitle: "Kopf und Körper zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            },
            {
              instructionTitle: "Körper und Beine zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            },
          ]
        },
      ]
      },
    });
  }

  render() {
    return (
      <AppWrapper>
        <Header manualTitles={["Dach bauen", "Legomännchen bauen"]}/> 
        <Main />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
